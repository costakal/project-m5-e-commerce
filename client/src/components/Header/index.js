import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import { HEADER_HEIGHT, FONT_STYLES, COLORS } from "../../constants";

const Header = () => {
  return (
    <Wrapper style={{ zIndex: "2001" }}>
      <StoreName>
        <Link exact="true" to="/">
          WATCHCAVE
        </Link>
      </StoreName>
      <NavBar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: ${HEADER_HEIGHT};
  width: 100%;
  border-bottom: 1px solid ${COLORS.border};
  background-color: white;
  box-shadow: 4px 25px 192px -60px rgba(0, 0, 0, 0.75);
`;

const StoreName = styled.h1`
  display: flex;
  justify-content: center;
  font-family: ${FONT_STYLES.header};
  font-size: 40px;
  padding: 20px;
  text-align: center;
  a {
    transition: 0.3s;
    text-decoration: none;
    &:hover {
      color: ${COLORS.primary};
      cursor: pointer;
    }
  }
`;
