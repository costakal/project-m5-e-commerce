import React, { useState } from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

const Cart = ({ showCart, setShowCart }) => {
  const [emptyCart, setEmptyCard] = useState(true);
  // when we add items to the cart setEmptyCart to false.

  const handleClose = () => setShowCart(false);

  return (
    <>
      {showCart && (
        <CartBox>
          <Mask onClick={handleClose} />
          <CartContent>
            <button onClick={handleClose}>X</button>
            {emptyCart && <p>Your cart is empty</p>}
            <CartItem />
            <CartItem />
            <p>
              Subtotal: <span>$x.xx</span>
            </p>
            <button onClick={handleClose}>Continue Shopping</button>
            <button>Checkout</button>
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
