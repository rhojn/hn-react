import React from 'react';
import styled from 'styled-components';
import Block from './block';
import { ReactComponent as ChevronDown } from '../images/chevron-down.svg';

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

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

const CommentBlock = ({data}) => (
  <Wrapper>
    <Block data={data} isComment />
    <ExpandButton><ChevronDown /></ExpandButton>
  </Wrapper>
)

export default CommentBlock;