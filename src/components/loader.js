import styled from 'styled-components';

const Loader = styled.div`
  height: ${props => props.height || 135}px;
  background-color: var(--page-primary-color);
  border-radius: 4px;
  padding: 1.5em;
`;

export const LoaderLine = styled.div`
  width: ${props => props.large ? '100%' : props.mini ? '10%' : '30%'};
  height: ${props => props.large ? '1.2em' : '.9em'};
  margin-top: ${props => props.large ? '.67em' : '0'};
  margin-bottom: ${props => props.large ? '.67em' : '0'};
  background-color: var(--page-background-color);
`;

export const LoaderLineContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Loader;