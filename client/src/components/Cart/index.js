import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "./CartItem";
import { toggleCartModal, updateCartSubtotal } from "../../actions";

const Cart = () => {
  const dispatch = useDispatch();
  const { showCart, cartItems, subtotal } = useSelector(
    (state) => state.cartReducer
  );

  const handleClose = () => dispatch(toggleCartModal());

  useEffect(() => {
    let subtotal = 0.0;
    if (cartItems.length > 0) {
      subtotal = cartItems.reduce(
        (acc, item) =>
          acc + Number(cartItems[0].price.replace("$", "")) * item.quantity,
        0
      );
    }
    dispatch(updateCartSubtotal(subtotal));
  }, [cartItems]);
  return (
    <>
      {showCart && (
        <CartBox>
          <Mask onClick={handleClose} />
          <CartContent>
            <button onClick={handleClose}>X</button>
            {cartItems.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map((item) => (
              <CartItem item={item} key={`cart-item-${item._id}`} />
            ))}
            <p>
              Subtotal: <span>{subtotal}</span>
            </p>
            <button onClick={handleClose}>Continue Shopping</button>
            <Link to="/checkout">Checkout</Link>
          </CartContent>
        </CartBox>
      )}
    </>
  );
};

export default Cart;

const CartBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 100px 0px;
`;

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  z-index: 50;
`;

const CartContent = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: white;
  z-index: 100;
`;
