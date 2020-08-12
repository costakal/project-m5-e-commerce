import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  addExistingItemToCart,
  removeItemFromCart,
  decreaseItemFromCart,
  updateQuantityByInputInCart,
} from "../../actions";

const CartItem = ({ item }) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const cartItemStoreObj = cartItems.find(
    (element) => element._id === item._id
  );
  return (
    <>
      <ItemBox>
        <img src={item.imageSrc} />
        <p>{item.name}</p>
        <p>
          Price <span>{item.price}</span>
        </p>
        <button
          onClick={() =>
            cartItemStoreObj.quantity > 1
              ? dispatch(decreaseItemFromCart(item))
              : dispatch(removeItemFromCart(item))
          }
        >
          -
        </button>
        <Input
          type="number"
          value={cartItemStoreObj.quantity}
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(updateQuantityByInputInCart(item, e.target.value));
          }}
        />
        <button onClick={() => dispatch(addExistingItemToCart(item))}>+</button>
        <button onClick={() => dispatch(removeItemFromCart(item))}>X</button>
      </ItemBox>
    </>
  );
};

export default CartItem;

const ItemBox = styled.div`
  border: 1px solid black;
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
  text-align: center;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
