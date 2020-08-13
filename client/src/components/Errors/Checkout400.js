import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { missingStockItems } from "../../actions";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { Icon } from "react-icons-kit";
import { toggleCartModal } from "../../actions";
import Cart from "../Cart";
import UnstyledButton from "../UnstyledButton";
import { COLORS } from "../../constants";

const Checkout400 = ({ error }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(missingStockItems(error.missingStockItems));
  }, []);

  const handleShow = () => dispatch(toggleCartModal());

  const amountOfItemsInCart = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <Wrapper>
      <p>{error.error}</p>
      <CartBtn onClick={() => handleShow()}>
        <CartIcon icon={shoppingCart} size={45} />
        Change order
      </CartBtn>
      <Cart cartQuantity={amountOfItemsInCart} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: red;
`;

const CartBtn = styled(UnstyledButton)`
  &:hover {
    color: ${COLORS.primary};
  }
`;

const CartIcon = styled(Icon)`
  padding: 20px;
`;

export default Checkout400;
