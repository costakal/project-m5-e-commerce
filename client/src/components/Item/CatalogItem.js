import React from 'react';
import styled from 'styled-components';

const CatalogItem = ({item: {name, price, imageSrc, numInStock, companyId}}) => {
    return (
        <Wrapper>
            <h3>{name}</h3>
            <img src={imageSrc} alt={name}/>
            <p>{price}</p>
            {numInStock > 0 ? 
            <p>In stock</p>
            :<p>Not in stock</p>}
            <p>Sold by: <span>{companyId}</span></p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 30%;
`;

export default CatalogItem;
