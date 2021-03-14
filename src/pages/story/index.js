import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { HeadProvider, Title } from 'react-head';
import { stories } from '../../store/actions';
import { getStoryByIDSelector } from '../../store/stories/selector';
import Block from '../../components/block';
import Loader, { LoaderLine, LoaderLineContainer } from '../../components/loader';
import Comments from '../../components/comments';

const Wrapper = styled.div`
  margin: 2em 0;
`;

const Story = ({doLoad}) => {
  const { id } = useParams();
  const story = useSelector(state => getStoryByIDSelector(state, id));

  useEffect(() => {
    const load = async (id) => {
      await doLoad(id);
    };

    if(!story || (story && story.status === 'INITIAL')) {
      load(id);
    }
  }, [id, story, doLoad]);

  return (
    <Wrapper>
      <HeadProvider>
        <Title>{story && story.status === 'LOADED' ? story.data.title : 'Story'} - Hacker News</Title>
      </HeadProvider>
      {story && story.status === 'LOADED' ? (
        <>
          <Block data={story.data} />
          {story.data.kids && <Comments ids={story.data.kids} />}
        </>
      ) : story && story.status === 'ERROR' ? (
        <div>ERROR</div>
      ) : (
        <Loader>
          <LoaderLine />
          <LoaderLine large />
          <LoaderLineContainer>
            <LoaderLine mini />
            <LoaderLine mini />
          </LoaderLineContainer>
        </Loader>
      )}
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  doLoad: bindActionCreators(stories.fetchStory, dispatch)
})

export default connect(null, mapDispatchToProps)(Story);