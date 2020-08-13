import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

import Loading from "../Loading";

const FeaturedItems = () => {
  const items = useSelector((state) => state.itemsReducer.items);
  const status = useSelector((state) => state.itemsReducer.status);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const featuredItem = (index) => {
    return (
      <>
        <img src={items.items[index].imageSrc} />
        <div>
          <h2>{items.items[index].name}</h2>
          <p>{items.items[index].price}</p>
        </div>
      </>
    );
  };

  console.log(items);
  return (
    <Wrapper>
      {status === "ready" ? (
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          infinite={true}
          autoPlay={responsive !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={500}
        >
          <Feature1>{featuredItem(200)}</Feature1>
          <Feature2>{featuredItem(95)}</Feature2>
          <Feature3>{featuredItem(10)}</Feature3>
          <Feature4>{featuredItem(26)}</Feature4>
          <Feature5>{featuredItem(29)}</Feature5>
          <Feature6>{featuredItem(40)}</Feature6>
        </Carousel>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default FeaturedItems;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0px;
  div {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        h2 {
          text-align: center;
          padding: 5px 25px;
        }
        p {
          padding-left: 5px;
          font-weight: bold;
        }
      }
    }
  }
`;

const Feature1 = styled.div``;
const Feature2 = styled.div``;
const Feature3 = styled.div``;
const Feature4 = styled.div``;
const Feature5 = styled.div``;
const Feature6 = styled.div``;
