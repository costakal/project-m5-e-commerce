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
          <img src={imageSrc} alt={name} />
          <ItemName>{name}</ItemName>
          <ItemInfo>
            <Price>{price}</Price>
            {/* {numInStock > 0 ? <p>In stock</p> : <p>Not in stock</p>} */}
            <CompanyName>{getCompanyName()}</CompanyName>
          </ItemInfo>
        </WrapperLink>
      ) : (
        <Loading />
      )}
    </>
  );
};

const WrapperLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 150px;
  }

  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin: 40px 20px 0 0;
  border-radius: 5px;
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

const ItemName = styled.h3`
  font-size: 1.1em;
  line-height: 1.4;
  padding: 20px 0 10px;
`;

const ItemInfo = styled.div`
  width: 100%;
`;

const Price = styled.p`
  font-size: 1.1em;
  padding: 10px 0;
`;

const CompanyName = styled.p`
  font-style: italic;
`;

export default CatalogItem;
