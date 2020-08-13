import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Loading from "../Loading";

import { FONT_STYLES, COLORS } from "../../constants";

const CatalogItem = ({
  item: { name, price, imageSrc, numInStock, companyId },
  link,
}) => {
  const companies = useSelector((state) => state.companiesReducer.companies);
  const status = useSelector((state) => state.companiesReducer.status);

  const getCompany = () => {
    return companies.companies.find((company) => company._id === companyId);
  };

  return (
    <>
      {status === "ready" ? (
        <Wrapper>
          <Link to={link}>
            <img src={imageSrc} alt={name} />
          </Link>
          <ItemName to={link}>
            <h3>{name}</h3>
          </ItemName>
          <ItemInfo>
            <Price>{price}</Price>
            {/* {numInStock > 0 ? <p>In stock</p> : <p>Not in stock</p>} */}
            <CompanyName to={`/companies/${getCompany()._id}`}>
              {getCompany().name}
            </CompanyName>
          </ItemInfo>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin: 40px 20px 0 0;
  border-radius: 5px;
  box-shadow: 0px 10px 50px lightgrey;
  img {
    height: 150px;
  }
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

const ItemName = styled(Link)`
  font-family: ${FONT_STYLES.itemName};
  font-weight: 700;
  font-size: 1.1em;
  line-height: 1.4;
  color: #373737;
  padding: 20px 0 10px;
  transition: all linear 200ms;
  &:hover {
    color: ${COLORS.primary};
  }
`;

const ItemInfo = styled.div`
  font-family: ${FONT_STYLES.itemInfo};
  width: 100%;
`;

const Price = styled.p`
  font-size: 1.1em;
  color: #373737;
  padding: 10px 0 20px;
`;

const CompanyName = styled(Link)`
  color: #848484;
  transition: all linear 200ms;
  &:hover {
    color: ${COLORS.primary};
  }
`;

export default CatalogItem;
