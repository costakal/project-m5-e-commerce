import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { fetchData } from "../../handlers";
import Loading from "../Loading";
import { HEADER_HEIGHT } from "../../constants";

const CompanyDetail = () => {
  const { companyId } = useParams();
  console.log({ companyId });
  const companies = useSelector((state) => state.companiesReducer.companies);
  const items = useSelector((state) => state.itemsReducer.items);
  console.log("sup", items);
  console.log("cheké", companies);

  return (
    <>
      <Wrapper>
        Welcome to (companyName)
        <p>Here is our collection</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;

  top: ${HEADER_HEIGHT};
`;
export default CompanyDetail;
