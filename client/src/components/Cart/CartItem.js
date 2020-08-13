import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { COLORS } from "../../constants";
import {
  addExistingItemToCart,
  removeItemFromCart,
  decreaseItemFromCart,
  updateQuantityByInputInCart,
} from "../../actions";

const CartItem = ({ item }) => {
  const { cartItems, missingItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const cartItemStoreObj = cartItems.find(
    (element) => element._id === item._id
  );

  return (
    <>
      <ItemBox id={item._id} missingItems={missingItems}>
        <Img src={item.imageSrc} />
        <Content>
          <p>{item.name}</p>
          <p>
            Price <span>{item.price}</span>
          </p>
          <Adjustables>
            <QuantityControls>
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
              <button
                onClick={() => {
                  if (cartItemStoreObj.quantity < cartItemStoreObj.numInStock)
                    dispatch(addExistingItemToCart(item));
                }}
              >
                +
              </button>
            </QuantityControls>
          </Adjustables>
        </Content>
        <button
          style={{ position: "absolute" }}
          onClick={() => dispatch(removeItemFromCart(item))}
        >
          X
        </button>
      </ItemBox>
    </>
  );
};

export default CartItem;

const Img = styled.img`
  padding: 15px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
const CloseButton = styled.button`
  border: 0px;
`;
const ItemBox = styled.div`
  display: flex;
  margin: 4px;
  border: ${(props) =>
    props.missingItems.find((item) => item._id === props.id) // if item is out of stock!
      ? "2px solid red"
      : `2px dashed ${COLORS.border}`};
  margin-left: 25px;
  margin-right: 25px;
  transition: 0.2s;
  button {
    background: black;
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    text-align: center;
    transition: 0.2s;
    right: 10px;
    &:hover {
      background: ${COLORS.primary};
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  button {
    background: black;
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    text-align: center;
    transition: 0.2s;
    &:hover {
      background: ${COLORS.primary};
      cursor: pointer;
    }
  }
`;

const Adjustables = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const QuantityControls = styled.div`
  display: flex;
  align-items: center;
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
