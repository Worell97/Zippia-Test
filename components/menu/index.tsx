import React from 'react';
import { useState } from 'react';
import { StyledMenu, NavMenuItem, NavMenuHome, Img, HiddenMenu } from './styles';
import { NavBtn, NavBtnLink } from '../button';
import { StyledSandWichButton } from '../button/styles';
import router from 'next/router';

function Menu() {
  const [hiddenMenuVisible, setHiddenMenuVisible] = useState(false);

  function handleHomeClick() {
    router.push('/');
  };

  function handleJobsClick(e: any) {
    e.preventDefault();
    router.push('/jobs');
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
        <NavMenuItem onClick={handleJobsClick}>
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
        <NavMenuItem onClick={handleJobsClick}>
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