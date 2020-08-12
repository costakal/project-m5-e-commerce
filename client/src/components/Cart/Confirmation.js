import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../actions";

const Confirmation = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  }, []);
  return (
    <Wrapper>
      <h2>Your shipment has been confirmed</h2>
      <p>
        Here is your shipping number <span>{data.confirmation}</span>
      </p>
      <p>
        <Link exact="true" to="/">
          Click Here
        </Link>
        to continue shopping
      </p>
    </Wrapper>
  );
};

export default Confirmation;

const Wrapper = styled.div``;
