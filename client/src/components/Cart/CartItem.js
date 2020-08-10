import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <>
      <ItemBox>
        <img src="http://goo.gl/ijai22" />
        <p>Item name</p>
        <p>
          Price <span>%x.xx</span>
        </p>
        <button>-</button>
        <input value="1" />
        <button>+</button>
        <button>X</button>
      </ItemBox>
    </>
  );
};

export default CartItem;

const ItemBox = styled.div`
  border: 1px solid black;
`;
