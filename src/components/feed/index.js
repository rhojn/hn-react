import React, { memo } from 'react';
import { connect } from 'react-redux';
import { storiesIdsSelector } from '../../store/stories/selector';
import List from '../list';
import Item from './item';

const Feed = memo(({ids}) => {
  const rowRenderer = (index, isVisible, measure) => {
    return (
      <Item initial={!ids.length} id={ids[index]} measure={measure} isVisible={isVisible} />
    )
  }

  return (
    <List count={ids.length || 10} rowRenderer={rowRenderer} />
  )
})

const mapStateToProps = state => ({
  ids: storiesIdsSelector(state)
});


export default connect(mapStateToProps, null)(Feed);