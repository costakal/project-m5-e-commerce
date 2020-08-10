import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import CartButton from "./CartButton";
import hamburger from "../../assets/hamburger.png";
import Companies from "../Lists/Companies";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Wrapper>
        <Hamburger>
          <img src={hamburger} onClick={() => setIsVisible(!isVisible)} />
        </Hamburger>
        <WebNavMenu>
          <NavLink to="/">Products</NavLink>
          <NavLink to="/companieslist">Companies</NavLink>
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
