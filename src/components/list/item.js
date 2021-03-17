import React from 'react';
import styled from 'styled-components';

import Block from '../block';
import Loader, { LoaderLine, LoaderLineContainer } from '../loader';

const Wrapper = styled.div`
  .spacer {
    height: .5em;
  }
`;

const ListItem = ({item, isComment}) => {
  return (
    <Wrapper>
      <div className="spacer"></div>
      {item && item.status === 'LOADING' && (
        <Loader>
          <LoaderLine />
          <LoaderLine large />
          <LoaderLineContainer>
            <LoaderLine />
          </LoaderLineContainer>
        </Loader>
      )}
      {item && item.status === 'LOADED' && item.data && (
        <Block data={item.data} link isComment={isComment} />
      )}
      <div className="spacer"></div>
    </Wrapper>
  );
}

export default ListItem;