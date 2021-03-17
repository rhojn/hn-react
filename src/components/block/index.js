import React, { memo } from 'react';
import styled from 'styled-components';
import Details from './details';
import Actions from './actions';

const Content = styled.div`
  padding: ${props => props.isComment ? '0 1.5em 0' : '1.5em'};
  background-color: var(--page-primary-color);
  border-radius: 4px;
  box-shadow: ${props => !props.isComment ? 'var(--page-box-shadow)' : 'none'};
`;

const Block = memo(({data, link, isComment, isExpanded = true}) => (
  <Content isComment={isComment}>
    <Details data={data} isComment={isComment} isExpanded={isExpanded}/>
    {data.type !== 'job' && !isComment && isExpanded && <Actions data={data} link={link} />}
  </Content>
))

export default Block;