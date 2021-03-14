import React, { useEffect, memo } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { stories } from '../../store/actions';
import { getStoryByIDSelector } from '../../store/stories/selector';
import ListItem from '../list/item';

const Item = memo(({initial, isVisible, id, doLoad, measure}) => {
  const story = useSelector(state => getStoryByIDSelector(state, id));

  useEffect(() => {
    const load = async (id) => {
      await doLoad(id);
    };

    if(!initial) {
      if(!story || (story && story.status === 'INITIAL')) {
        load(id);
      } else {
        if(isVisible) measure();
      }
    }
  }, [initial, isVisible, id, story, doLoad, measure]);

  return (
    <ListItem item={initial ? {status: 'LOADING'} : story} />
  )
})

const mapDispatchToProps = dispatch => ({
  doLoad: bindActionCreators(stories.fetchStory, dispatch)
})

export default connect(null, mapDispatchToProps)(Item);