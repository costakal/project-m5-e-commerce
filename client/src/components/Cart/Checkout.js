import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { HEADER_HEIGHT, COLORS, FONT_STYLES } from "../../constants";
import Confirmation from "./Confirmation";
import { useSelector } from "react-redux";
import { fetchData } from "../../handlers";
import { toggleCartModal } from "../../actions";
import { useDispatch } from "react-redux";
import Checkout400 from "../Errors/Checkout400";

const Checkout = () => {
  const dispatch = useDispatch();
  const [confirmationResponse, setConfirmationResponse] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);
  const { cartItems, subtotal } = useSelector((state) => state.cartReducer);
  const [checkoutCart, setCheckoutCart] = useState(cartItems); // copy of cart items that will remain on the confirmation page once when the cart empties

  useEffect(() => {
    dispatch(toggleCartModal());
  }, []);

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
              <input placeholder="first" required />
              <input placeholder="last" />
              <label>Payment Information</label>
              <input placeholder="Credit Card Number" />
              <input placeholder="Security Code" />
              <Promo>
                <Checkbox type="checkbox" />
                <span>
                  I would like to receive and hear about special offers and
                  promotions
                </span>
              </Promo>

              <button disabled={cartItems.length > 0 ? false : true}>
                Send Order
              </button>
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
              <ItemStyle>
                <span>Quantity:{item.quantity}</span>
                Item:{item.name}
                <span>
                  Price:{" "}
                  {Number(checkoutCart[0].price.replace("$", "")) *
                    item.quantity}
                </span>
              </ItemStyle>
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
    font-style: ${FONT_STYLES.header};
    font-weight: bold;
    font-size: 1.5em;
    color: ${COLORS.primary};
    margin-bottom: 10px;
  }

  h2 {
    font-weight: bold;
    font-size: 1em;
  }

  input {
    width: 200px;
    height: 20px;
    border-radius: 3px;
    margin-top: 5px;
    border-style: none none dotted none;
  }

  & > :first-child {
    padding: 0 100px 0 50px;
  }
`;

const Form = styled.form`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  label {
    margin: 20px auto 10px auto;
  }
`;

const SummaryItem = styled.div`
  padding-top: 15px;
`;

const ItemStyle = styled.p`
  font-style: ${FONT_STYLES.itemName};
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
  margin-bottom: 30px;
  padding: 10px;

  &:hover {
    box-shadow: 0px 10px 50px silver;
  }
`;
