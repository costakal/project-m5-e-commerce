import React, { useState } from "react";
import styled from "styled-components";

const cartButton = () => {
  return (
    <>
      <Button>Cart</Button>
    </>
  );
};

const Button = styled.button`
  border-radius: 20px;
  font-size: 20px;
  width: 100px;
  border: none;
  height: 40px;
  :hover {
    color: gold;
    background-color: #29282895;
  }
`;

export default cartButton;
