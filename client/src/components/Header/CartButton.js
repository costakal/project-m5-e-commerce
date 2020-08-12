import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { Icon } from "react-icons-kit";

import { toggleCartModal } from "../../actions";
import { COLORS, FONT_STYLES } from "../../constants";
import Cart from "../Cart";

const CartButton = () => {
  const dispatch = useDispatch();
  const { cartItems, subtotal } = useSelector((state) => state.cartReducer);

  const handleShow = () => dispatch(toggleCartModal());

  const amountOfItemsInCart = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      {subtotal > 0 ? (
        <FullCart onClick={handleShow}>
          <div>
            <Icon icon={shoppingCart} size={15} />
            <span>{subtotal}</span>
          </div>
        </FullCart>
      ) : (
        <EmptyCart onClick={handleShow}>
          <Icon icon={shoppingCart} size={25} />
        </EmptyCart>
      )}
      <Cart cartQuantity={amountOfItemsInCart} />
    </>
  );
};

const FullCart = styled.button`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  border: solid black 2px;
  font-size: 15px;
  font-family: ${FONT_STYLES.content};
  span {
    padding-left: 10px;
  }
  :hover {
    background-color: ${COLORS.primary};
    border: solid ${COLORS.primary} 2px;
  }
`;

const EmptyCart = styled.button`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  :hover {
    color: ${COLORS.primary};
  }
`;

export default CartButton;
