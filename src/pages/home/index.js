import React, { useEffect } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HeadProvider, Title } from 'react-head';
import { stories } from '../../store/actions';
import { storiesTypeSelector, storiesIdsSelector } from '../../store/stories/selector';
import Filter from './filter';
import Feed from '../../components/feed';

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Home = ({doLoad, ids, type}) => {
  useEffect(() => {
    const loadStories = async () => {
      return await doLoad(type, true);
    };
    loadStories();
  }, [type, doLoad]);

  return (
    <Wrapper>
      <HeadProvider>
        <Title>Stories - Hacker News</Title>
      </HeadProvider>
      <Filter />
      <Feed ids={ids} />
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  type: storiesTypeSelector(state),
  ids: storiesIdsSelector(state)
})

const mapDispatchToProps = dispatch => ({
  doLoad: bindActionCreators(stories.fetchStories, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);