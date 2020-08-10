import React from "react";
import styled from "styled-components";

const CartItem = ({item}) => {
  return (
    <>
      <ItemBox>
        <img src={item.imageSrc} />
        <p>{item.name}</p>
        <p>
          Price <span>{item.price}</span>
        </p>
        <button>-</button>
        <input value="1" />
        <button >+</button>
        <button>X</button>
      </ItemBox>
    </>
  );
};

export default CartItem;

const ItemBox = styled.div`
  border: 1px solid black;
`;
