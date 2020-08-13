import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { HEADER_HEIGHT, COLORS } from "../../constants";
import Confirmation from "./Confirmation";
import { useSelector } from "react-redux";
import { fetchData } from "../../handlers";
import { toggleCartModal } from "../../actions";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const [confirmationResponse, setConfirmationResponse] = useState(null);
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
      if (res.status === 200) setConfirmationResponse(res);
    });
  };

  return (
    <Wrapper>
      {!confirmationResponse ? (
        <div>
          <h1>Payment</h1>
          <h2>Contact Information</h2>
          <Form onSubmit={(event) => handleSendOrder(event)}>
            <input placeholder="Email" type="email" required />
            <label>
              I would like to receive and hear about special offers and
              promotions
            </label>
            <input type="checkbox" />
            <label>Name</label>
            <input placeholder="first" required />
            <input placeholder="last" />
            <label>Shipping Address</label>
            <input placeholder="Company (optional)" />
            <input placeholder="Address" />
            <input placeholder="Apartment, suite, etc." />
            <input placeholder="City" />
            <input placeholder="Country/Region" />
            <input placeholder="Province" />
            <input placeholder="Postal Code" />
            <input placeholder="Phone (Optional)" />
            <label>Payment Information</label>
            <input placeholder="Credit Card Number" />
            <input placeholder="Security Code" />
            <button disabled={cartItems.length > 0 ? false : true}>
              Send Order
            </button>
          </Form>
        </div>
      ) : (
        <Confirmation data={confirmationResponse} />
      )}

      <div>
        <h1>Order summary</h1>
        {checkoutCart.map((item) => {
          return (
            <SummaryItem>
              <p>
                <span>Quantity:{item.quantity}</span>
                Item:{item.name}
                <span>
                  Price:{" "}
                  {Number(checkoutCart[0].price.replace("$", "")) *
                    item.quantity}
                </span>
              </p>
            </SummaryItem>
          );
        })}
        <h1>Amount to pay: {subtotal}</h1>
      </div>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  position: absolute;
  top: ${HEADER_HEIGHT};
  margin: 30px 20px;
  display: flex;

  h1 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  div {
    border: ${COLORS.border} solid 3px;
    border-radius: 8px;
    margin-bottom: 30px;
    padding: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SummaryItem = styled.div`
  padding-top: 15px;
`;
