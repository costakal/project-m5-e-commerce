import React from "react";
import styled from "styled-components";

import { HEADER_HEIGHT } from "../../constants";
import Confirmation from "./Confirmation";

const Checkout = () => {
  return (
    <Wrapper>
      <h2>Contact Information</h2>
      <input placeholder="Email or mobile phone number" />
      <label>
        I would like to receive and hear about special offers and promotions
      </label>
      <input type="checkbox" />
      <h3>Name</h3>
      <input placeholder="first" />
      <input placeholder="last" />
      <h3>Shipping Address</h3>
      <input placeholder="Company (optional)" />
      <input placeholder="Address" />
      <input placeholder="Apartment, suite, etc." />
      <input placeholder="City" />
      <input placeholder="Country/Region" />
      <input placeholder="Province" />
      <input placeholder="Postal Code" />
      <input placeholder="Phone (Optional)" />
      <h3>Payment Information</h3>
      <input placeholder="Credit Card Number" />
      <input placeholder="Security Code" />
      <button>Confirm Purchase</button>
      <Confirmation />
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  position: absolute;
  top: ${HEADER_HEIGHT};
`;
