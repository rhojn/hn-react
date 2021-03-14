import React from 'react';
import styled from 'styled-components';
import Block from '../block';
import Loader, { LoaderLine } from '../loader';
import { ReactComponent as ChevronDown } from '../../images/chevron-down.svg';

const Wrapper = styled.div`
  padding: 1em 0 0;
  position: relative;
`;

const ExpandButton = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  border-radius: 4px;
  padding: 2px;
  border: none;
  color: inherit;
  font-size: 1em;
  position: absolute;
  margin-top: .7em;
  margin-bottom: .5em;
  left: -.7em;
  top: 0;
  z-index: 99;
  background: var(--page-primary-color);
  cursor: pointer;
  transform: rotate(${props => props.isExpanded ? '0' : '180deg'});

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  &:hover {
    background: var(--page-background-color);
  }
`;

const CommentBlock = ({data, isExpanded, onExpand}) => (
  <Wrapper>
    {data.status === 'LOADING' ? (
      <Loader>
        <LoaderLine />
        <LoaderLine large />
        <LoaderLine large />
        <LoaderLine large />
      </Loader>
    ) : (
      <Block data={data.data} isComment isExpanded={isExpanded} />
    )}
    <ExpandButton onClick={onExpand} isExpanded={isExpanded}><ChevronDown /></ExpandButton>
  </Wrapper>
)

export default CommentBlock;