import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Cart from "../Cart";
import { toggleCartModal } from "../../actions";
import { useSelector } from "react-redux";

const CartButton = () => {
  const dispatch = useDispatch();
  const { cartItems, subtotal } = useSelector((state) => state.cartReducer);
  
  const handleShow = () => dispatch(toggleCartModal());

  return (
    <>
      <Button onClick={handleShow}>
        Cart
        <div>
          <span>
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
          </span>
          <span>$ {subtotal}</span>
        </div>
      </Button>
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
