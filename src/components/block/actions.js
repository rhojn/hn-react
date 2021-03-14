import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Award, MessageSquare, Link as LinkIcon } from 'react-feather';
import { formatURL } from '../../lib';

const Wrapper = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ActionButton = styled.button`
  margin: 0 1.5em 0 0;
  display: flex;
  justify-content: flex-start;
  color: var(--page-font-color);
  align-items: center;
  border: none;
  padding: 0;
  background: transparent;
  outline: none;
  font-size: .8em;
  opacity: .75;

  svg {
    width: 1.4em;
    height: 1.4em;
    color: currentColor;
    vertical-align: middle;
    margin-right: .6em;
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Actions = memo(({data, link}) => (
  <Wrapper>
    <ActionButton><Award /> {data.score} points</ActionButton>
    <ActionButton>
      <MessageSquare />
      {link ? <Link to={`/story/${data.id}`}>{data.descendants} comments</Link> : `${data.descendants} comments`}
    </ActionButton>
    <ActionButton>
      <LinkIcon /> <a href={data.url} target="_blank" rel="noreferrer noopener">{formatURL(data.url)}</a>
    </ActionButton>
  </Wrapper>
))

export default Actions;