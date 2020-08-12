import React from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import CompanyElements from "./CompanyElement";

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
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  :hover {
    color: gold;
    font-weight: bold;
    -moz-box-shadow: 10px 10px 5px 0px rgba(242, 242, 242, 1);
    box-shadow: 10px 10px 5px 0px rgba(242, 242, 242, 1);
    border-radius: 24px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  justify-content: space-around;
  align-items: center;

  top: ${HEADER_HEIGHT};
`;
export default Companies;
