import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import Brand from './brand';
import Nav from './nav';

const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: #fff;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container className="container">
        <Brand href="/">Hacker News</Brand>
        <Nav />
      </Container>
    </StyledHeader>
  )
}

export default Header;