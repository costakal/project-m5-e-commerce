import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import UseFetchData from "../../Hooks/use-FetchData";
import { requestCategory, receiveCategory } from "../../actions";

import ItemsWrapper from "../Item/ItemsWrapper";
import CatalogItem from "../Item/CatalogItem";
import { HEADER_HEIGHT, FONT_STYLES } from "../../constants";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
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
<<<<<<< Updated upstream
          <Label>
            categories <Icon icon={chevronRight} size={20} />
          </Label>
=======
          <p>categories </p>
>>>>>>> Stashed changes
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
  margin-top: ${HEADER_HEIGHT};
  padding: 40px 20px 40px 40px;
`;

const Heading = styled.div`
  font-family: ${FONT_STYLES.header};
  display: flex;
  align-items: flex-end;
`;

const Label = styled.p`
  font-size: 1.2em;
`;

const CategoryName = styled.h1`
  font-size: 1.8em;
  margin-left: 5px;
`;

export default CategoryFeed;
