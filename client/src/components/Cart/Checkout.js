import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { HEADER_HEIGHT, COLORS, FONT_STYLES } from "../../constants";
import Confirmation from "./Confirmation";
import { useSelector } from "react-redux";
import { fetchData } from "../../handlers";
import { toggleCartModal } from "../../actions";
import { useDispatch } from "react-redux";
import Checkout400 from "../Errors/Checkout400";
import UnstyledButton from "../UnstyledButton";
import { receiveAllItems, requestAllItems } from "../../actions";
import UseFetchData from "../../Hooks/use-FetchData";

const Checkout = () => {
  const dispatch = useDispatch();
  const [confirmationResponse, setConfirmationResponse] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);
  const { cartItems, subtotal } = useSelector((state) => state.cartReducer);
  const [checkoutCart, setCheckoutCart] = useState(cartItems); // copy of cart items that will remain on the confirmation page once when the cart empties

  useEffect(() => {
    if (!confirmationResponse) setCheckoutCart(cartItems);
  }, [cartItems]);

  const handleSendOrder = (event) => {
    event.preventDefault();

    let bod = {
      order: cartItems.map((item) => {
        return { itemId: item._id, quantity: item.quantity };
      }),
    };

    const reqObj = {
      method: "PUT",
      body: JSON.stringify(bod),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetchData("http://localhost:3000/order", reqObj).then((res) => {
      if (res.status === 200) {
        setConfirmationResponse(res);
        setErrorResponse(null);
      } else if (res.status === 400) setErrorResponse(res);
    });
  };
  return (
    <Wrapper>
      {!confirmationResponse ? (
        <StyledDiv>
          <h1>Payment</h1>
          <Form onSubmit={(event) => handleSendOrder(event)}>
            <div>
              <label>Contact Information</label>
              <input placeholder="Email" type="email" required />
              <label>Name</label>
              <input placeholder="First name" required />
              <input placeholder="Last name" />
              <label>Payment Information</label>
              <input placeholder="Credit Card Number" />
              <input placeholder="Security Code" />
            </div>
            <div>
              <label>Shipping Address</label>
              <input placeholder="Company (optional)" />
              <input placeholder="Address" />
              <input placeholder="Apartment, suite, etc." />
              <input placeholder="City" />
              <input placeholder="Country/Region" />
              <input placeholder="Province" />
              <input placeholder="Postal Code" />
              <input placeholder="Phone (Optional)" />
              <Promo>
                <Checkbox type="checkbox" />
                <span>
                  I would like to receive and hear about special offers and
                  promotions
                </span>
              </Promo>

              <SendButton disabled={cartItems.length > 0 ? false : true}>
                Send Order
              </SendButton>
            </div>
          </Form>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <Confirmation data={confirmationResponse} />
        </StyledDiv>
      )}

      <StyledDiv>
        <h1>Order summary</h1>
        {checkoutCart.map((item) => {
          return (
            <SummaryItem>
              <p>
                <span>{item.name + "  "}</span>
                Quantity:{" " + item.quantity + "  "}
                Price:{" "}
                {Number(checkoutCart[0].price.replace("$", "")) * item.quantity}
              </p>
            </SummaryItem>
          );
        })}
        <h2>Amount to pay: {subtotal}</h2>
        {errorResponse && <Checkout400 error={errorResponse} />}
      </StyledDiv>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  position: absolute;
  top: ${HEADER_HEIGHT};
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  h1 {
    font-family: ${FONT_STYLES.header};
    font-size: 1.5em;
    margin: 10px 0;
  }

  h2 {
    font-size: 1em;
    font-weight: 700;
    margin-top: 50px;
    color: #373737;
  }

  input {
    width: 200px;
    height: 20px;
    border-radius: 3px;
    margin-top: 5px;
    border-style: none none solid none;
  }

  & > :first-child {
    padding: 0 50px 0 50px;
  }

  div:first-of-type h1 {
    margin-top: 20px;
  }
`;

const Form = styled.form`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  label {
    color: ${COLORS.primary};
    margin: 20px auto 10px auto;
  }
`;

const SummaryItem = styled.div`
  padding-top: 15px;
  color: #373737;

  span {
    font-weight: 700;
    font-family: ${FONT_STYLES.itemName};
  }
`;

const Promo = styled.span`
  font-size: 0.7em;
  display: block;
  width: 200px;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  width: 15px !important;
  height: 15px !important;
  margin: auto 5px;
`;

const StyledDiv = styled.div`
  border-radius: 5px;
  box-shadow: 0px 10px 50px lightgrey;
  border-radius: 8px;
  margin: 30px;
  padding: 10px;

  &:hover {
    box-shadow: 0px 10px 50px silver;
  }
`;

const SendButton = styled(UnstyledButton)`
  font-size: 16px;
  margin: 10px 0px 30px 0;
  padding: 12px;
  color: black;
  border: solid black 3px;
  width: 100%;
  transition: 0.15s;
  text-align: center;
  &:hover {
    background-color: ${COLORS.primary};
    border: solid ${COLORS.primary} 3px;
    color: white;
  }
`;
