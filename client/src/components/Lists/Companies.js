import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../constants";
import { fetchData } from "../../handlers";
import { requestAllItems, receiveAllItems } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";

const Companies = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.itemsReducer.companies);
  const status = useSelector((state) => state.itemsReducer.status);

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
