import React from 'react';
import styled from 'styled-components';
import List from './list';

const Wrapper = styled.div`
  margin-top: 2em;
  border: 4px;
  background-color: var(--page-primary-color);
`;

const CommentList = ({ids, rowRenderer}) => {
  return (
    <Wrapper>
      <List count={ids.length || 10} rowRenderer={rowRenderer} />
    </Wrapper>
  )
}

export default CommentList;