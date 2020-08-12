import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Loading from "../Loading";
import { HEADER_HEIGHT } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< Updated upstream
import {
  addItemToCart,
  toggleCartModal,
  addExistingItemToCart,
} from "../../actions";
=======
import { addItemToCart, toggleCartModal } from "../../actions";
>>>>>>> Stashed changes

const ItemDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const items = useSelector((state) => state.itemsReducer.items);
  const { itemId } = useParams();
  const [itemData, setItemData] = useState(null);

  const handleAddToCart = (item) => {
<<<<<<< Updated upstream
    cartItems.findIndex((element) => element._id === item._id) < 0
      ? dispatch(addItemToCart(item))
      : dispatch(addExistingItemToCart(item));

    dispatch(toggleCartModal());
  };
  console.log(cartItems);
=======
    dispatch(addItemToCart(item));
    dispatch(toggleCartModal());
  };
>>>>>>> Stashed changes

  useEffect(() => {
    if (items) {
      setItemData(items.items.find((i) => i._id == itemId));
    }
  }, [items]);

  console.log(cartItems);
  return (
    <>
      {itemData ? (
        <Wrapper>
          <h2>{itemData.name}</h2>
          <img src={itemData.imageSrc} alt={itemData.name} />
          <button onClick={() => handleAddToCart(itemData)}>Add to cart</button>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: ${HEADER_HEIGHT};
`;

export default ItemDetails;
