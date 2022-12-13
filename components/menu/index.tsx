import React from 'react';
import { useEffect, useState } from 'react';
import { StyledMenu, StyledNavMenu, NavMenuItem, NavMenuHome, Img, HiddenMenu } from './styles';
import { NavBtn, NavBtnLink, Button } from '../button';
import { StyledButton, StyledSandWichButton } from '../button/styles';
import Router from 'next/router';

function Menu() {
  const [hiddenMenuVisible, setHiddenMenuVisible] = useState(false);

  function handleHomeClick() {
    Router.push('/');
  };

  function handleSandwichButtonClick(e: any) {
    e.preventDefault();
    setHiddenMenuVisible(prevState => !prevState)
  }

  return (
    <StyledMenu>
      <NavMenuHome onClick={handleHomeClick}>
        <Img src="/assets/full.png" alt="" />
      </NavMenuHome>
      <StyledSandWichButton onClick={handleSandwichButtonClick} />
      <HiddenMenu visible={hiddenMenuVisible} onClick={handleSandwichButtonClick}>
        <NavMenuItem>
          JOBS
        </NavMenuItem>
        <NavMenuItem>
          CAREERS
        </NavMenuItem>
        <NavMenuItem>
          POST JOB
        </NavMenuItem>
        <NavBtnLink to="/signup">
          SIGN IN
        </NavBtnLink>
      </HiddenMenu>
      <NavBtn>
        <NavMenuItem>
          JOBS
        </NavMenuItem>
        <NavMenuItem>
          CAREERS
        </NavMenuItem>
        <NavMenuItem>
          POST JOB
        </NavMenuItem>
        <NavBtnLink to="/signup">
          SIGN IN
        </NavBtnLink>
      </NavBtn>
    </StyledMenu>
  );
}

export default Menu;