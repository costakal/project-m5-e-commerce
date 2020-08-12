import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import CartButton from "./CartButton";
import hamburger from "../../assets/hamburger.png";
import { COLORS } from "../../constants";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Wrapper>
        <Hamburger>
          <img src={hamburger} onClick={() => setIsVisible(!isVisible)} />
        </Hamburger>
        <WebNavMenu>
          <NavLink
            activeStyle={{ color: COLORS.primary, transition: "1s" }}
            exact
            to="/"
          >
            PRODUCTS
          </NavLink>
          <NavLink
            activeStyle={{ color: COLORS.primary, transition: "1s" }}
            to="/companieslist"
          >
            COMPANIES
          </NavLink>
        </WebNavMenu>
        <CartButton />
      </Wrapper>
      {isVisible && (
        <MobileNavMenu>
          <Link to="/">Products</Link>
          <Link to="/">Companies</Link>
        </MobileNavMenu>
      )}
    </>
  );
};

export default NavBar;

const Wrapper = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 75px;
  @media (max-width: 768px) {
    padding: 0px 5px;
  }
  button {
    margin: 20px 40px;
  }
  a {
    position: relative;
    padding: 0px 40px 13px;
    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 4px;
      left: 50%;
      position: absolute;
      background: ${COLORS.primary};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    &:hover:after {
      width: 100%;
      left: 0;
    }
  }
`;

const MobileNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  width: 100%;
  a {
    padding: 30px;
    &:hover {
      background: grey;
    }
  }
`;

const Hamburger = styled.button`
  background-color: white;
  border: none;
  img {
    height: 35px;
    &:hover {
      opacity: 0.5;
    }
  }
  a {
    display: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const WebNavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
