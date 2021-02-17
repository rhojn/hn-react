import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { HeadProvider, Title } from 'react-head';
import { stories } from '../../store/actions';
import { getStoryByIDSelector } from '../../store/stories/selector';
import Loader, { LoaderLine } from '../../components/loader';
import CommentBlock from '../../components/comment-block';

const Wrapper = styled.div`
  margin: 1em 0;
  padding: 1em 0;
  background-color: var(--page-primary-color);
`;

const CommentItemWrapper = styled.div`
  padding: 0 ${props => props.nested ? '1.5em' : 0};
`;

const CommentItem = ({id, nested, doLoad}) => {
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
    <CommentItemWrapper nested={nested}>
      {story && story.status === 'LOADED' ? (
        <>
            <CommentBlock data={story.data} isComment />
            {story && story.data && story.data.kids ? story.data.kids.map(item => (
              <CommentItem key={item} id={item} doLoad={doLoad} nested />
            )) : null}
        </>
      ) : story && story.status === 'ERROR' ? (
        <div>ERROR</div>
      ) : (
        <Loader>
          <LoaderLine />
          <LoaderLine large />
          <LoaderLine large />
        </Loader>
      )}
    </CommentItemWrapper>
  )
}

const Comment = ({doLoad}) => {
  const { id } = useParams();
  return (
    <Wrapper>
      <HeadProvider>
        <Title>Comment - Hacker News</Title>
      </HeadProvider>
      <CommentItem id={id} doLoad={doLoad} nested />
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  doLoad: bindActionCreators(stories.fetchStory, dispatch)
})

export default connect(null, mapDispatchToProps)(Comment);