import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchData } from '../../handlers';

const CatalogItem = ({item: {name, price, imageSrc, numInStock, companyId}}) => {
    const [companyName, setCompanyName] = useState(null);
    useEffect(() => {
        fetchData(`http://localhost:3000/companies/${companyId}`)
        .then(res => setCompanyName(res.company.name));
    }, []);
    return (
        <Wrapper>
            <h3>{name}</h3>
            <img src={imageSrc} alt={name}/>
            <p>{price}</p>
            {numInStock > 0 ? 
            <p>In stock</p>
            :<p>Not in stock</p>}
            <p>Sold by: <span>{companyName}</span></p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 20%;
    margin: 20px;
    img {
        height: 100px;
    }
`;

export default CatalogItem;
