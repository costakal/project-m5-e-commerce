import React, { useState } from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading";

import { COLORS } from "../../constants";

const CompaniesDrop = ({ isShown }) => {
  const companies = useSelector((state) => state.companiesReducer.companies);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  console.log(categories);
  console.log(isShown);
  // ${(props) => ((props.isShown ? dislpay : flex): " display:none")};
  // ${(prop) => prop.isShown && "display: flex"};
  if (companies !== null) {
    return (
      <>
        <>
          {isShown && (
            <Wrapper>
              <Ul>
                {companies.companies
                  .sort(function (a, b) {
                    var nameA = a.name.toLowerCase(),
                      nameB = b.name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                  })

                  .map((company) => (
                    <StyledLink
                      to={`/companies/${company._id}`}
                      key={`companies-${company.name}`}
                    >
                      <Li>{company.name}</Li>
                    </StyledLink>
                  ))}
              </Ul>
            </Wrapper>
          )}
        </>
      </>
    );
  } else {
    return <Loading />;
  }
};
const Ul = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  width: 80px;

  @media (max-width: 1004px) {
    width: 30px;
  }
`;
const Wrapper = styled.div`
  margin-top: 14px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-color: white;
  width: calc(80% - 150px);
  /* transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  transition: all 0.9s ease-in; */
`;
const StyledLink = styled(Link)``;

const H1 = styled.h1``;
export default CompaniesDrop;
