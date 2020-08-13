import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CatalogItem from "../Item/CatalogItem";
import Loading from "../Loading";
import { HEADER_HEIGHT, FONT_STYLES } from "../../constants";
import Companies from "../Lists/Companies";
import FeaturedItems from "./FeaturedItems";
import ItemsWrapper from "../Item/ItemsWrapper";

import Button from "../UnstyledButton";

const HomeCatalog = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const items = useSelector((state) => state.itemsReducer.items);
  const status = useSelector((state) => state.itemsReducer.status);

  const showMore = () => setVisibleItems(visibleItems + 3);

  return (
    <>
      {status === "ready" ? (
        <>
          <FeaturesTitle>Featured Items</FeaturesTitle>
          <FeaturedItems />
          <Wrapper>
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
              <Button onClick={showMore}>Load More</Button>
            </LoadWrapper>
          </Wrapper>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
  // eslint-disable-next-line
};

const FeaturesTitle = styled.h2`
  margin-top: ${HEADER_HEIGHT};
  padding: 20px 0;
  font-family: ${FONT_STYLES.header};
  font-size: 1.8em;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 0 20px 40px 40px;
`;

const LoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export default HomeCatalog;
