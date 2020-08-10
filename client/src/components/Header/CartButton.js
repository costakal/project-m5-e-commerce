import React, { useState } from "react";
import styled from "styled-components";

import Cart from "../Cart";

const CartButton = () => {
  const [showCart, setShowCart] = useState(false);
  const handleShow = () => setShowCart(true);

  return (
    <>
      <Button onClick={handleShow}>Cart</Button>
      <Cart showCart={showCart} setShowCart={setShowCart} />
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
