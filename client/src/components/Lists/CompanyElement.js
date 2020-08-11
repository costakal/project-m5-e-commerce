import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const CompanyElement = ({ companies: { name } }) => {
  const companies = useSelector((state) => state.companiesReducer.companies);
  const status = useSelector((state) => state.companiesReducer.status);
  // console.log(companies);

  if (status === "ready") {
    return (
      <>
        <Wrapper>
          <Comp>{name}</Comp>
        </Wrapper>
      </>
    );
  } else return <Loading />;
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const Comp = styled.div`
  border: 1px solid;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default CompanyElement;
