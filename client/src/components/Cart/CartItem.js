import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

<<<<<<< Updated upstream
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
=======
const CartItem = ({ item }) => {
>>>>>>> Stashed changes
  return (
    <>
      <ItemBox>
        <Img src={item.imageSrc} />
        <p>{item.name}</p>
        <p>
          Price <span>{item.price}</span>
        </p>
<<<<<<< Updated upstream
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
=======
        <button>-</button>
        <input value="1" />
        <button>+</button>
        <CloseButton>X</CloseButton>
>>>>>>> Stashed changes
      </ItemBox>
    </>
  );
};

export default CartItem;
const Img = styled.img`
  border-radius: 35px;
`;
const CloseButton = styled.button`
  border: 0px;
`;
const ItemBox = styled.div`
  margin: 4px;
  border: 2px solid black;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 35px;
  :hover {
    background-color: #ededed;
  }
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
