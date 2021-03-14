import React from 'react';
import styled from 'styled-components';
import List from '../list';
import Item from './item';

const Wrapper = styled.div`
  margin: 2em 0;
  border: 4px;
  background-color: var(--page-primary-color);
  padding-bottom: 1em;
  border-radius: 4px;
  box-shadow: var(--page-box-shadow);
`;

const CommentList = ({ids}) => {
  const rowRenderer = (index, isVisible, measure) => {
    return (
      <Item initial={!ids.length} id={ids[index]} measure={measure} isVisible={isVisible} nested />
    )
  }

  return (
    <Wrapper>
      <List count={ids.length || 10} rowRenderer={rowRenderer} />
    </Wrapper>
  )
}

export default CommentList;