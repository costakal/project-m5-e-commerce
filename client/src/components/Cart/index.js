import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import UnstyledButton from "../UnstyledButton";
import { COLORS } from "../../constants";
import CartItem from "./CartItem";
import { toggleCartModal, updateCartSubtotal } from "../../actions";
import PrimaryButton from "../PrimaryButton";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({ cartQuantity }) => {
  const dispatch = useDispatch();
  const { showCart, cartItems, subtotal } = useSelector(
    (state) => state.cartReducer
  );
  const handleClose = () => dispatch(toggleCartModal());

  useEffect(() => {
    let subtotal = 0.0;

    if (cartItems.length > 0) {
      subtotal = cartItems
        .reduce(
          (acc, item) =>
            acc + Number(cartItems[0].price.replace("$", "")) * item.quantity,
          0
        )
        .toFixed(2);
    }
    dispatch(updateCartSubtotal(subtotal));
  }, [cartItems]);

  return (
    <>
      {showCart && (
        <CartBox>
          <Mask onClick={handleClose} />
          <CartContent>
            <CartHeader>
              <p>
                You have {cartQuantity} item
                {cartQuantity === 0 || cartQuantity > 1 ? <span>s</span> : ""}
                <span> in your Cart</span>
              </p>
              <CloseButton onClick={handleClose}>X</CloseButton>
            </CartHeader>

            {cartItems.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map((item) => (
              <CartItem item={item} key={`cart-item-${item._id}`} />
            ))}
            <p>
              Subtotal: <span style={{ fontWeight: "bold" }}>${subtotal}</span>
            </p>
            <Options>
              <StyledLink onClick={handleClose}>Continue Shopping</StyledLink>
              <StyledLink
                onClick={handleClose}
                emptycart={cartItems.length > 0 ? "false" : "true"}
                to={cartItems.length > 0 ? "/checkout" : "/"}
              >
                Checkout
              </StyledLink>
            </Options>
          </CartContent>
        </CartBox>
      )}
    </>
  );
};

export default Cart;

const CartBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  z-index: 10;
  max-height: 100vh;
  overflow-y: auto;
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
  margin: 50px;
  min-height: 100%;
  border-radius: 2px;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  p {
    margin: 20px 40px;
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  font-size: 16px;
  padding: 5px 9px;
  color: black;
  border: solid black 3px;
  transition: 0.15s;
  text-align: center;
  &:hover {
    background-color: ${COLORS.primary};
    border: solid ${COLORS.primary} 3px;
    color: white;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    justify-content: space-around;
    a {
      font-size: 14px;
    }
  }
`;

const StyledLink = styled(Link)`
  cursor: ${(props) => (props.emptyCart ? "not-allowed" : "pointer")};
  margin: 20px;
`;
