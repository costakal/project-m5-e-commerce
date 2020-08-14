import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../actions";
import { COLORS } from "../../constants";
import { requestAllItems, receiveAllItems } from "../../actions";
import UseFetchData from "../../Hooks/use-FetchData";

const Confirmation = ({ data }) => {
  const dispatch = useDispatch();
  UseFetchData(requestAllItems, receiveAllItems, "http://localhost:3000/items");

  useEffect(() => {
    dispatch(emptyCart());
  }, []);
  return (
    <Wrapper>
      <h2>Your shipment has been confirmed</h2>
      <p>Here is your confirmation number:</p>
      <p style={{ color: COLORS.primary }}>{data.confirmation}</p>
    </Wrapper>
  );
};

export default Confirmation;

const Wrapper = styled.div`
  p {
    margin-top: 20px;
  }
`;
