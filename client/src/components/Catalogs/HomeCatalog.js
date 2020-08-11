import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CatalogItem from "../Item/CatalogItem";
import Loading from "../Loading";
import { HEADER_HEIGHT, FEATURED_HEIGHT } from "../../constants";
import Companies from "../Lists/Companies";
import FeaturedItems from "./FeaturedItems";

const HomeCatalog = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const items = useSelector((state) => state.itemsReducer.items);
  const status = useSelector((state) => state.itemsReducer.status);

  const showMore = () => setVisibleItems(visibleItems + 4);

  return (
    <>
      {status === "ready" ? (
        <>
          <FeaturesTitle>Featured Items</FeaturesTitle>
          <FeaturedItems />
          <Catalog>
            {items.items.slice(0, visibleItems).map((item) => (
              <StyledLink
                to={`/items/${item._id}`}
                key={`home-catalog-${item._id}`}
              >
                <CatalogItem item={item} />
              </StyledLink>
            ))}
            <button onClick={showMore}>Load More</button>
          </Catalog>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
  // eslint-disable-next-line
};

const FeaturesTitle = styled.h2`
  position: absolute;
  top: ${HEADER_HEIGHT};
`;

const Catalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: ${FEATURED_HEIGHT};
`;

const StyledLink = styled(Link)`
  width: 30%;
`;

export default HomeCatalog;
