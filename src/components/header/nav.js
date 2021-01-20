import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-left: 2em;
  }
  
  a {
    font-size: 1.1rem;
    color: inherit;
    text-decoration: none;
    font-weight: 600;
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
    </StyledNav>
  )
}

export default Nav;