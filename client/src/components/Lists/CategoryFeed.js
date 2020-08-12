import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import UseFetchData from "../../Hooks/use-FetchData";
import { requestCategory, receiveCategory } from "../../actions";

import ItemsWrapper from "../Item/ItemsWrapper";
import CatalogItem from "../Item/CatalogItem";
import Loading from "../Loading";

const CategoryFeed = () => {
  const { categoryName } = useParams();

  UseFetchData(requestCategory, receiveCategory, `/categories/${categoryName}`);
  const category = useSelector((state) => state.categoryReducer.category);
  const status = useSelector((state) => state.categoryReducer.status);

  if (status !== "ready" || category.items === undefined) return <Loading />;
  else
    return (
      <Wrapper>
        <Heading>
          <p>categories &gt;</p>
          <CategoryName>{category.category}</CategoryName>
        </Heading>
        <ItemsWrapper>
          {category.items.map((item) => (
            <CatalogItem
              item={item}
              link={`/items/${item._id}`}
              key={`category-item-${item._id}`}
            />
          ))}
        </ItemsWrapper>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 125px;
  padding: 40px 0 40px 40px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryName = styled.h1`
  font-size: 1.5em;
  margin-left: 10px;
`;

export default CategoryFeed;
