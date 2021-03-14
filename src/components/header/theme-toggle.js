import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Moon } from '../../images/moon.svg';
import { ReactComponent as Sun } from '../../images/sun.svg';

const ToggleBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 2px;
  border-radius: 100%;
  background: transparent;
  border: none;
  color: var(--page-font-color);
  fill: var(--page-font-color);
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);
  const handleClick = () => {
    setDark(!dark);
    const backgroundColor = `var(--background-${dark ? 'light' : 'dark'})`;
    const primaryColor = `var(--primary-${dark ? 'light' : 'dark'})`;
    const fontColor = `var(--font-color-${dark ? 'light' : 'dark'})`;
    const boxShadow = `var(--box-shadow-${dark ? 'light' : 'dark'})`;
    document.body.style.setProperty("--page-background-color", backgroundColor);
    document.body.style.setProperty("--page-primary-color", primaryColor);
    document.body.style.setProperty("--page-font-color", fontColor);
    document.body.style.setProperty("--page-box-shadow", boxShadow);
  }

  return (
    <ToggleBtn onClick={handleClick}>{dark ? <Sun /> : <Moon />}</ToggleBtn>
  )
}

export default ThemeToggle;