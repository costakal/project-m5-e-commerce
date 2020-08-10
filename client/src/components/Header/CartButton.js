import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import Cart from "../Cart";
import { toggleCartModal } from "../../actions";

const CartButton = () => {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(toggleCartModal());

  return (
    <>
      <Button onClick={handleShow}>Cart</Button>
      <Cart />
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

export default CartButton;
