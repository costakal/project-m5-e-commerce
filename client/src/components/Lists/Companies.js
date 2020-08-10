import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../constants";
import { fetchData } from "../../handlers";
import { requestAllItems, receiveAllItems } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Companies = () => {
  const dispatch = useDispatch();

  const companies = useSelector((state) => state.itemsReducer.companies);
  console.log(companies);

  return <Companieslist>A list of all the Companies</Companieslist>;
};

const Companieslist = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: ${HEADER_HEIGHT};
`;
export default Companies;
