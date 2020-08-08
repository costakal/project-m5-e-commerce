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
  width: 100vw;
  border-bottom: 1px solid black;
`;

const StoreName = styled.h1`
  padding: 20px;
  text-align: center;
`;
