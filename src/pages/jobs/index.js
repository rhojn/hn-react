import React, { useEffect } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HeadProvider, Title } from 'react-head';
import { stories } from '../../store/actions';
import { storiesIdsSelector } from '../../store/stories/selector';
import Feed from '../../components/feed';

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Jobs = ({doLoad, ids}) => {
  useEffect(() => {
    const loadStories = async () => {
      return await doLoad('jobstories', true);
    };
    loadStories();
  }, [doLoad]);

  return (
    <Wrapper>
      <HeadProvider>
        <Title>Jobs - Hacker News</Title>
      </HeadProvider>
      <Feed ids={ids} />
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  ids: storiesIdsSelector(state)
})

const mapDispatchToProps = dispatch => ({
  doLoad: bindActionCreators(stories.fetchStories, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);