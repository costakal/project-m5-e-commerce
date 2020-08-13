import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import Loading from "../Loading";
import { HEADER_HEIGHT, COLORS, FONT_STYLES } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  toggleCartModal,
  addExistingItemToCart,
} from "../../actions";
import UnstyledButton from "../UnstyledButton";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const items = useSelector((state) => state.itemsReducer.items);
  const companies = useSelector((state) => state.companiesReducer.companies);
  const { itemId } = useParams();
  const [itemData, setItemData] = useState(null);

  const handleAddToCart = (item) => {
    cartItems.findIndex((element) => element._id === item._id) < 0
      ? dispatch(addItemToCart(item))
      : dispatch(addExistingItemToCart(item));

    dispatch(toggleCartModal());
  };
  console.log(cartItems);

  useEffect(() => {
    if (items) {
      setItemData(items.items.find((i) => i._id == itemId));
    }
  }, [items]);

  const getCompanyName = () => {
    return companies.companies.find(
      (element) => element._id === itemData.companyId
    ).name;
  };

  const getCompanyUrl = () => {
    return companies.companies.find(
      (element) => element._id === itemData.companyId
    ).url;
  };

  console.log(companies);
  return (
    <>
      {itemData ? (
        <Wrapper>
          <LeftSide>
            <h2>{itemData.name}</h2>
            <p>
              Sold by:{" "}
              <Link to={`/companies/${itemData.companyId}`}>
                {getCompanyName()}
              </Link>
            </p>
            <p>
              Website: <a href={getCompanyUrl()}>{getCompanyUrl()}</a>
            </p>
            <Purchase>
              <p>{itemData.numInStock} left in stock </p>
              <CartButton onClick={() => handleAddToCart(itemData)}>
                Add to cart
              </CartButton>
            </Purchase>
            <Tags>
              <p>Tags:</p>
              <span>
                <Link to={`/categories/${itemData.category}`}>
                  {itemData.category}
                </Link>
              </span>
              <span>{itemData.body_location}</span>
            </Tags>
          </LeftSide>
          <RightSide>
            <img src={itemData.imageSrc} alt={itemData.name} />
          </RightSide>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Wrapper = styled.div`
  padding: ${HEADER_HEIGHT} 50px 0px;
  display: grid;
  grid-template-columns: 40% 60%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  h2 {
    font-size: 28px;
    padding-bottom: 10px;
  }
  p {
    font-size: 16px;
    padding-bottom: 5px;
  }
  a {
    transition: 0.2s;
    &:hover {
      color: ${COLORS.primary};
    }
  }
`;

const CartButton = styled(UnstyledButton)`
  font-size: 16px;
  margin: 10px 0px 0px;
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

const Purchase = styled.div`
  padding: 40px 0px;
  width: 100%;
`;

const Tags = styled.div`
  p {
    font-size: 16px;
    padding-bottom: 15px;
  }
  span {
    font-size: 14px;
    background-color: ${COLORS.border};
    margin: 0px 5px 0px 0px;
    padding: 8px;
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  img {
    padding: 50px 200px 85px;
    width: 100%;
  }
`;

export default ItemDetails;
