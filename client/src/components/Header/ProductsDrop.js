import React, { useState } from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const ProductsDrop = ({ isDropped }) => {
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const companies = useSelector((state) => state.companiesReducer.companies);

  console.log(categories);
  if (companies !== null) {
    return (
      <>
        {isDropped && (
          <Wrapper>
            <Ul>
              <Li>
                <Link to={`/categories/entertainment`}>entertainment</Link>
              </Li>
              <Li>
                <Link to={`/categories/fitness`}>fitness</Link>
              </Li>
              <Li>
                <Link to={`/categories/gaming`}>gaming</Link>
              </Li>
              <Li>
                <Link to={`/categories/industrial`}>industrial</Link>
              </Li>
              <Li>
                <Link to={`/categories/lifestyle`}>lifestyle</Link>
              </Li>
              <Li>
                <Link to={`/categories/medical`}>medical</Link>
              </Li>
              <Li>
                <Link to={`/categories/pets and animals`}>
                  pets and animals
                </Link>
              </Li>
            </Ul>
          </Wrapper>
        )}
      </>
    );
  } else return <Loading />;
};

const Wrapper = styled.div`
  margin-top: 14px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-color: white;
  /* width: calc(80% - 920px); */
`;
const Ul = styled.ul``;
const StyledLink = styled(Link)``;
const Li = styled.li`
  height: 60px;

  @media (max-width: 1004px) {
    width: 30px;
  }
`;

export default ProductsDrop;
