import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CatalogItem from "../Item/CatalogItem";
import Loading from "../Loading";
import { FONT_STYLES, COLORS } from "../../constants";
import FeaturedItems from "./FeaturedItems";
import ItemsWrapper from "../Item/ItemsWrapper";

import hero from "../../assets/hero-banner.jpg";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import LoadButton from "../PrimaryButton";
import Typeahead from "../../Typeahead";

const HomeCatalog = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const items = useSelector((state) => state.itemsReducer.items);
  const status = useSelector((state) => state.itemsReducer.status);

  const showMore = () => {
    window.scrollTo(0, 1000);
    setVisibleItems(visibleItems + 3);
  };

  return (
    <>
      {status === "ready" ? (
        <>
          <Hero>
            <HeroContent>
              <HeadingSearch>
                <ShopHeading>Shop From Your Favourite Brands</ShopHeading>
                <Typeahead />
              </HeadingSearch>
              <a href="#featured">
                <Icon icon={arrowDown} size={50} />
              </a>
            </HeroContent>
          </Hero>
          <FeaturesTitle id="featured">Featured Items</FeaturesTitle>
          <FeaturedItems />
          <ContentTitle>Browse our Collection</ContentTitle>
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
              <LoadButton onClick={showMore}>Load More</LoadButton>
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

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 20px;
  color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  a {
    color: #fff;
  }
`;

const HeadingSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShopHeading = styled.h2`
  font-size: 3em;
  font-family: ${FONT_STYLES.header};
`;

const FeaturesTitle = styled.h2`
  margin-top: 20px;
  padding: 20px 0;
  font-family: ${FONT_STYLES.header};
  font-size: 1.8em;
  text-align: center;
`;

const ContentTitle = styled.h2`
  padding: 25px 50px;
  font-family: ${FONT_STYLES.header};
  font-size: 1.8em;
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
