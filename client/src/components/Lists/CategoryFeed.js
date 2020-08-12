import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import UseFetchData from "../../Hooks/use-FetchData";
import { requestCategory, receiveCategory } from "../../actions";

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
        <Feed>
          {category.items.map((item) => (
            <ItemWrapper
              to={`/items/${item._id}`}
              key={`category-item-${item._id}`}
            >
              <CatalogItem item={item} />
            </ItemWrapper>
          ))}
        </Feed>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 125px;
  padding: 40px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

const CategoryName = styled.h1`
  font-size: 1.5em;
  margin-left: 10px;
`;

const Feed = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemWrapper = styled(Link)`
  width: 300px;
  padding: 40px 40px 0 0;
`;

export default CategoryFeed;
