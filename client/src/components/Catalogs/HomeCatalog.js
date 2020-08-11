import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CatalogItem from "../Item/CatalogItem";
import Loading from "../Loading";
import { HEADER_HEIGHT } from "../../constants";
import Companies from "../Lists/Companies";

const HomeCatalog = () => {
  const items = useSelector((state) => state.itemsReducer.items);
  const status = useSelector((state) => state.itemsReducer.status);

  return (
    <>
      {status === "ready" ? (
        <Catalog>
          {items.items.map((item) => (
            <StyledLink
              to={`/items/${item._id}`}
              key={`home-catalog-${item._id}`}
            >
              <CatalogItem item={item} />
            </StyledLink>
          ))}
        </Catalog>
      ) : (
        <Loading />
      )}
    </>
  );
  // eslint-disable-next-line
};

const Catalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: ${HEADER_HEIGHT};
`;

const StyledLink = styled(Link)`
  width: 30%;
`;

export default HomeCatalog;
