import React from "react";
import styled from "styled-components";

import NavBar from "./NavBar";

const Header = () => {
  return (
    <Wrapper>
      <StoreName>The Store Name</StoreName>
      <NavBar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 125px;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: white;
`;

const StoreName = styled.h1`
  padding: 20px;
  text-align: center;
`;
