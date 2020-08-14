import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import CartButton from "./CartButton";
import { COLORS } from "../../constants";
import CompaniesDrop from "./CompaniesDrop";
import ProductsDrop from "./ProductsDrop";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isDropped, setIsDropeed] = useState(false);
  //console.log(isShown);
  return (
    <>
      <Wrapper>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <WebNavMenu>
          <Box1
            onMouseEnter={() => setIsDropeed(true)}
            onMouseLeave={() => setIsDropeed(false)}
          >
            <ProductsLink
              activeStyle={{ color: COLORS.primary, transition: "1s" }}
              to="/"
            >
              PRODUCTS
            </ProductsLink>
            <ProductsDrop isDropped={isDropped} />
          </Box1>

          <Box
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <CompaniesLink
              activeStyle={{ color: COLORS.primary, transition: "1s" }}
              to="/companieslist"
              onClick={() => setOpen(!open)}
            >
              COMPANIES
            </CompaniesLink>
            <CompaniesDropDown
              isShown={isShown}
              onClick={() => setIsShown(!isShown)}
            />
          </Box>
        </WebNavMenu>
        <CartButtonStyled />
      </Wrapper>

      <Ul open={open}>
        <Li>
          <PageLink to="/" onClick={() => setOpen(!open)}>
            Products
          </PageLink>
        </Li>

        <Li>
          <PageLink to="/companieslist" onClick={() => setOpen(!open)}>
            Companies
          </PageLink>
        </Li>
      </Ul>
    </>
  );
};

export default NavBar;
const CartButtonStyled = styled(CartButton)`
  @media (min-width: 768) {
    display: none;
  }
`;
const ProductsLink = styled(Link)``;
const Box1 = styled.div``;
const Box = styled.div`
  :hover {
    border: none;
  }
`;
const CompaniesLink = styled(NavLink)``;
const CompaniesDropDown = styled(CompaniesDrop)``;
const Hov = styled.ul``;
const Drop1 = styled.div`
  :hover {
    display: flex;
  }
`;
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  @media (min-width: 769px) {
    display: none;
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
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
// const LinkBox = styled.div`
//   transition-property: all;
//   transition-duration: 0.3s;
//   transition-timing-function: ease-in;
//   :hover {
//     background-color: grey;
//   }
// `;
const PageLink = styled(Link)`
  /* display: flex;
  justify-content: center;
  align-items: center;
  align-content: center; */
`;

const Ul = styled.ul`
  display: none;
  /* justify-content: center;
  align-content: flex-start; */
  height: 100vh;
  @media (max-width: 769px) {
    display: flex;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: all 0.3s ease-in;
    background-color: white;
    flex-flow: column nowrap;
    align-content: center;
  }
`;
const Li = styled.li`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  padding: 30px;
  :hover {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: grey;
  }
  /* :hover {
    
  }
  div {
  } */
`;
