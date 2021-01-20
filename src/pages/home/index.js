import React, { useEffect } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storiesIdsSelector, storiesDataSelector } from '../../store/stories/selector';
import { stories } from '../../store/actions';
import Filter from './filter';
import Grid from '../../components/grid';
import GridItem from '../../components/grid/item';

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Home = ({doLoad, ids}) => {
  useEffect(() => {
    const loadStories = async () => await doLoad('topstories');
    loadStories();
    console.log('LOAD STORIES');
  }, [doLoad]);
  const renderItem = (item) => {
    return (
      <GridItem item={item} />
    )
  }

  return (
    <Wrapper>
      <Filter />
      <Grid data={ids} renderItem={renderItem} />
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  ids: storiesIdsSelector(state),
  data: storiesDataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  doLoad: bindActionCreators(stories.fetchStories, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);