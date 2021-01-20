import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 1.5rem;
  background: #fff;
  border-radius: 4px;
  margin: 10px 0;
`;

const GridItem = ({item}) => {
  return (
    <StyledItem item={item}># {item}</StyledItem>
  )
}

export default GridItem;