import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const CatalogItem = ({item: {name, price, imageSrc, numInStock, companyId}}) => {
    const companies = useSelector(state => state.companiesReducer.companies);
    const status = useSelector(state => state.companiesReducer.status);

    const getCompanyName = () => {
        return companies.companies.find(element => element._id === companyId).name;
    }
                
    return (
        <>
            {status === 'ready' ?
            <Wrapper>
                <h3>{name}</h3>
                <img src={imageSrc} alt={name}/>
                <p>{price}</p>
                {numInStock > 0 ? 
                <p>In stock</p>
                :<p>Not in stock</p>}
                <p>Sold by: <span>{getCompanyName()}</span></p>
            </Wrapper>
            : <Loading />
            }
        </>
    );
};

const Wrapper = styled.div`
    img {
        height: 100px;
    }
`;

export default CatalogItem;
