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
  background: var(--page-background-color);
  background: linear-gradient(90deg, var(--page-secondary-color) 25%, var(--page-tertiary-color) 37%, var(--page-secondary-color) 63%);
  background-size: 400% 100%;
  animation: loading 1.4s ease infinite;
`;

export const LoaderLineContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Loader;