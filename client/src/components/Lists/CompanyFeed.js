import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { fetchData } from "../../handlers";
import Loading from "../Loading";
import { HEADER_HEIGHT } from "../../constants";

import ItemsWrapper from "../Item/ItemsWrapper";
import CatalogItem from "../Item/CatalogItem";

const CompanyFeed = () => {
  const { companyId } = useParams();
  const [companyFeed, setCompanyFeed] = useState("");
  console.log("feed", companyFeed);

  useEffect(() => {
    fetchData(`http://localhost:3000/companies/${companyId}`).then((res) => {
      console.log(res);
      setCompanyFeed(res);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrapper>
        {companyFeed ? (
          <>
            <H2>Welcome to {companyFeed.company.name}'s store</H2>
            <Sub>Our items:</Sub>
            <ItemsWrapper>
              {companyFeed.items.map((item) => (
                <CatalogItem
                  item={item}
                  link={`/items/${item._id}`}
                  key={`category-item-${item._id}`}
                />
              ))}
            </ItemsWrapper>
          </>
        ) : (
          <Loading />
        )}
      </Wrapper>
    </>
  );
};

// <ItemCard>
//   <PicLink to={`/items/${item._id}`} key={item.id}>
//     <Img src={item.imageSrc} />
//   </PicLink>
//   <CardElements>
//     <StyledLink to={`/items/${item._id}`} key={item.id}>
//       {item.name}
//     </StyledLink>
//     <p>Categorie: {item.category}</p>
//     <p>{item.price}</p>
//   </CardElements>
// </ItemCard>

const Wrapper = styled.div`
  /* position: absolute;
  top: ${HEADER_HEIGHT}; */
  margin-top: ${HEADER_HEIGHT};
  padding: 40px 20px 40px 40px;
`;

const H2 = styled.h2`
  font-size: 40px;
  /* margin-top: 35px; */
  margin-bottom: 20px;
  /* margin-left: 20px; */
`;

const Sub = styled.div`
  font-size: 20px;
  margin-left: 20px;
`;
const ItemCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  :hover {
    -moz-box-shadow: 10px 10px 5px 0px rgba(242, 242, 242, 1);
    box-shadow: 10px 10px 5px 0px rgba(242, 242, 242, 1);
  }
`;
const Img = styled.img`
  width: 70px;
`;
const CardElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 20px;
`;
const PicLink = styled(Link)``;
const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: bold;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  :hover {
    color: gold;
  }
`;
// const ItemCard = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 50px;
//   transition-property: all;
//   transition-duration: 0.2s;
//   transition-timing-function: ease-in;
//   :hover {
//     -moz-box-shadow: 10px 10px 5px 0px rgba(242, 242, 242, 1);
//     box-shadow: 10px 10px 5px 0px rgba(242, 242, 242, 1);
//   }
// `;
// const Img = styled.img`
//   width: 70px;
// `;
// const CardElements = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   margin-left: 20px;
// `;
// const PicLink = styled(Link)``;
// const StyledLink = styled(NavLink)`
//   font-size: 20px;
//   font-weight: bold;
//   transition-property: all;
//   transition-duration: 0.2s;
//   transition-timing-function: ease-in;
//   :hover {
//     color: gold;
//   }
// `;

export default CompanyFeed;
