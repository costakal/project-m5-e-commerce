import React, { useEffect } from "react";
import styled from "styled-components";

import CartButton from "../Header/CartButton";
import { useDispatch } from "react-redux";
import { missingStockItems } from "../../actions";

const Checkout400 = ({ error }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missingStockItems(error.missingStockItems));
  }, []);

  return (
    <Wrapper>
      <p>{error.error}</p>
      <CartButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: red;
`;

export default Checkout400;
