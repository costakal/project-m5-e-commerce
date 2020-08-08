import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import hamburger from "../../assets/hamburger.png";

const NavBar = () => {
  return (
    <Wrapper>
      <MobileNavMenu>
        <img src={hamburger} />
        <NavLink to="/">Products</NavLink>
        <NavLink to="/">Companies</NavLink>
      </MobileNavMenu>
      <WebNavMenu>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/">Companies</NavLink>
      </WebNavMenu>
      <button>Cart</button>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    margin: 20px 40px;
  }
  a {
    padding: 0px 40px;
  }
`;

const MobileNavMenu = styled.div`
  img {
    height: 35px;
    &:hover {
      opacity: 0.5;
    }
  }
  a {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const WebNavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
