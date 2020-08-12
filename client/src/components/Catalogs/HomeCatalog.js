import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CatalogItem from "../Item/CatalogItem";
import Loading from "../Loading";
import { HEADER_HEIGHT } from "../../constants";
import Companies from "../Lists/Companies";
import FeaturedItems from "./FeaturedItems";
import ItemsWrapper from "../Item/ItemsWrapper";

const HomeCatalog = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const items = useSelector((state) => state.itemsReducer.items);
  const status = useSelector((state) => state.itemsReducer.status);

  const showMore = () => setVisibleItems(visibleItems + 3);

  return (
    <>
      {status === "ready" ? (
        <Wrapper>
          <FeaturesTitle>Featured Items</FeaturesTitle>
          <FeaturedItems />
          <ItemsWrapper>
            {items.items.slice(0, visibleItems).map((item) => (
              <CatalogItem
                item={item}
                link={`/items/${item._id}`}
                key={`home-catalog-${item._id}`}
              />
            ))}
          </ItemsWrapper>
          <LoadWrapper>
            <LoadButton onClick={showMore}>Load More</LoadButton>
          </LoadWrapper>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
  // eslint-disable-next-line
};

const Wrapper = styled.div`
  margin-top: 125px;
  padding: 20px;
`;

const FeaturesTitle = styled.h2``;

const LoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const LoadButton = styled.button`
  width: 100px;
  padding: 10px 0;
  background: none;
`;

export default HomeCatalog;
