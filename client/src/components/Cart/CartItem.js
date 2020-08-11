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
        <input
          value={cartItemStoreObj.quantity}
          // onChange={(e) =>
          //   dispatch(updateQuantityByInputInCart(item, e.target.value))
          // }
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
