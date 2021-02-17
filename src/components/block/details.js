import React, { memo } from 'react';
import styled from 'styled-components';
import { timeDifference, formatURL } from '../../lib';

const Wrapper = styled.div`
  margin-bottom: ${props => !props.isComment ? '1.5em' : '0'};
  color: var(--page-font-color);
  
  h3 {
    color: inherit;
    font-size: .8em;
    font-weight: normal;
    margin: 0;
    opacity: .75;

    span {
      opacity: ${props => props.isComment ? '.75' : '1'};
      margin-right: .6em;
    }
  }

  h1 {
    color: inherit;
    font-size: 1em;
    font-weight: 500;
    margin-bottom: 0;

    span {
      font-size: .95em;
      font-weight: 400;
    }
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .text {
    margin-top: 1em;
    font-size: .9em;
    font-weight: normal;

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const Details = memo(({data, isComment, isExpanded}) => (
  <Wrapper isComment>
    <h3>
      <span>
        {!isComment && 'Posted by '}
        {data.by}
      </span>
      <span>{timeDifference(new Date().getTime(), data.time * 1000)}</span>
      {!isExpanded && <span>{(data.kids && data.kids.length) || 0} children</span>}
    </h3>
    {data !== 'job' && isExpanded && (
      <>
        {!isComment && <h1>
          <a href={data.url} target="_blank" rel="noreferrer noopener">
            {data.title}
          </a>
        </h1>}
        {isComment && <div className="text" dangerouslySetInnerHTML={{ __html: data.text }}></div>}
      </>
    )}

  </Wrapper>
))

export default Details;