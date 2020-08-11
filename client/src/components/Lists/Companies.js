import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../constants";
import { Link } from "react-router-dom";
import { fetchData } from "../../handlers";
import { requestAllItems, receiveAllItems } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";
import CompanyElements from "./CompanyElement";
import _ from "lodash";
import chunk from "lodash/chunk";

const Companies = () => {
  const companies = useSelector((state) => state.companiesReducer.companies);
  const status = useSelector((state) => state.itemsReducer.status);
  //  console.log(JSON.stringify(companies, null, 2));
  let stuff = companies;
  console.log(stuff);
  console.log("zzz", companies);
  //const sorted = _.sortBy(companies.name, "name");
  //console.log(sorted);

  if (companies !== null) {
    return (
      <>
        <Wrapper>
          {companies.companies.map((company) => (
            <StyledLink
              to={`/companies/${company._id}`}
              key={`companies-${company.name}`}
            >
              {/* <Comp>{company.name}</Comp> */}
              <CompanyElements companies={company} />
            </StyledLink>
          ))}
        </Wrapper>
      </>
    );
  } else {
    return <Loading />;
  }
};

const StyledLink = styled(Link)`
  display: flex;
  font-size: 20px;
  :hover {
    color: gold;
    font-weight: bold;
    background-color: #29282895;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  justify-content: center;
  align-items: center;

  top: ${HEADER_HEIGHT};
`;
export default Companies;
