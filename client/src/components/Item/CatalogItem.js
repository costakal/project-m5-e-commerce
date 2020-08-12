import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const CatalogItem = ({
  item: { name, price, imageSrc, numInStock, companyId },
  link,
}) => {
  const companies = useSelector((state) => state.companiesReducer.companies);
  const status = useSelector((state) => state.companiesReducer.status);

  const getCompanyName = () => {
    return companies.companies.find((element) => element._id === companyId)
      .name;
  };

  return (
    <>
      {status === "ready" ? (
        <WrapperLink to={link}>
          <h3>{name}</h3>
          <img src={imageSrc} alt={name} />
          <p>{price}</p>
          {numInStock > 0 ? <p>In stock</p> : <p>Not in stock</p>}
          <p>
            Sold by: <span>{getCompanyName()}</span>
          </p>
        </WrapperLink>
      ) : (
        <Loading />
      )}
    </>
  );
};

const WrapperLink = styled(Link)`
  img {
    height: 100px;
  }

  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin: 40px 20px 0 0;
  border-radius: 20px;
  box-shadow: 0px 10px 50px lightgrey;
  &:hover {
    box-shadow: 0px 10px 50px silver;
  }
  @media (min-width: 700px) {
    width: calc(50% - 20px);
  }
  @media (min-width: 1000px) {
    width: calc(33% - 20px);
  }
`;

export default CatalogItem;
