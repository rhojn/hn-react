import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './theme-toggle';

const StyledNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  li {
    display: inline-block;
    margin-left: 2em;
  }
  
  a {
    font-size: 1.1rem;
    color: inherit;
    text-decoration: none;
    font-weight: 400;
    opacity: .8;

    &:hover,
    &.active {
      opacity: 1;
    }
  }
`;

const Nav = () => {
  const links = [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'Ask',
      to: '/ask'
    },
    {
      label: 'Show',
      to: '/show'
    },
    {
      label: 'Jobs',
      to: '/jobs'
    }
  ]

  return (
    <StyledNav>
      {links.map(link => (
        <li key={link.to}><NavLink exact to={link.to}>{link.label}</NavLink></li>
      ))}
      <li><ThemeToggle /></li>
    </StyledNav>
  )
}

export default Nav;