import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import CartButton from "./CartButton";
import { COLORS } from "../../constants";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
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

      <MobileNavMenu>
        <Ul open={open}>
          <LinkBox>
            <Li>
              <PageLink to="/" onClick={() => setOpen(!open)}>
                Products
              </PageLink>
            </Li>
          </LinkBox>
          <LinkBox>
            <Li>
              <PageLink to="/companieslist" onClick={() => setOpen(!open)}>
                Companies
              </PageLink>
            </Li>
          </LinkBox>
        </Ul>
      </MobileNavMenu>
    </>
  );
};

export default NavBar;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  @media (min-width: 769px) {
    display: none;
    height: 25vh;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#639470" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

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

const WebNavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const LinkBox = styled.div`
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  :hover {
    background-color: grey;
  }
`;
const PageLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  :hover {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;
const MobileNavMenu = styled.div``;
const Ul = styled.ul`
  display: none;
  height: 100vh;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.3s ease-in;
  @media (max-width: 769px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: white;
  }
`;
const Li = styled.li`
  height: 15vh;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
