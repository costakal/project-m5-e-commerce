import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Confirmation = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <h2>Your shipment has been confirmed</h2>
      <p>
        Here is your shipping number <span>{data.confirmation}</span>
      </p>
      <p>
        <Link exact to="/">
          Click Here
        </Link>
        to continue shopping
      </p>
    </Wrapper>
  );
};

export default Confirmation;

const Wrapper = styled.div``;
