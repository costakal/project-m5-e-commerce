import React from "react";
import styled from "styled-components";

const ItemsWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ItemsWrapper;
