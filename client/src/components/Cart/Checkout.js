import React, { useEffect } from "react";
import styled from "styled-components";

import { HEADER_HEIGHT } from "../../constants";
import Confirmation from "./Confirmation";
import { useSelector } from "react-redux";
import { fetchData } from "../../handlers";
import { toggleCartModal } from "../../actions";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems, subtotal } = useSelector((state) => state.cartReducer);
  console.log(cartItems);

  useEffect(() => {
    dispatch(toggleCartModal());
  }, []);

  const handleConfirmPurchase = () => {
    const reqObj = {
      method: "PUT",
      body: {
        order: [
          {
            itemId: "6544",
            quantity: "2",
          },
        ],
      },
    };

    fetch("http://localhost:3000/order", reqObj).then((res) =>
      console.log(res)
    );

    // fetchData("http://localhost:3000/order", reqObj).then((res) =>
    //   console.log(res)
    // );
  };

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
      <button onClick={() => handleConfirmPurchase()}>Confirm Purchase</button>
      {/* <Confirmation /> */}
      <div>
        {cartItems.map((item) => {
          return (
            <>
              <p>
                <span>Quantity:{item.quantity}</span>
                Item:{item.name}
                <span>
                  Price:{" "}
                  {Number(cartItems[0].price.replace("$", "")) * item.quantity}
                </span>
              </p>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  position: absolute;
  top: ${HEADER_HEIGHT};
`;
