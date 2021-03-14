import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { stories } from '../../store/actions';
import { getStoryByIDSelector } from '../../store/stories/selector';
import Block from './block';

const Wrapper = styled.div`
  padding: 0 ${props => props.nested ? '1.5em' : 0};
  margin: .5em 0;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    width: 1em;
    height: 3em;
    background-color: var(--page-primary-color);
    position: absolute;
    z-index: 1;
    left: 1em;
    top: 0;
  }

  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--page-font-color);
    position: absolute;
    opacity: .5;
    top: 0;
    z-index: 1;
  }
`;

const Item = ({initial, isVisible, id, doLoad, measure, nested}) => {
  const story = useSelector(state => getStoryByIDSelector(state, id));
  const [isExpanded, setIsExpanded] = useState(true);

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


  const handleOnExpand = () => {
    setIsExpanded(!isExpanded);
    setTimeout(() => {
      measure();
    }, (300));
  };

  return (
    <Wrapper nested={nested}>
      {story && <Block data={story} isComment isExpanded={isExpanded} onExpand={handleOnExpand} />}
      {isExpanded && (story && story.data && story.data.kids ? story.data.kids.map(item => (
        <Item key={item} isVisible id={item} doLoad={doLoad} measure={measure} nested />
      )) : null)}
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  doLoad: bindActionCreators(stories.fetchStory, dispatch)
})

export default connect(null, mapDispatchToProps)(Item);