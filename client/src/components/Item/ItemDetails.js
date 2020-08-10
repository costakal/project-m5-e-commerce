import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { fetchData } from '../../handlers';
import Loading from '../Loading';
import { HEADER_HEIGHT } from '../../constants';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        fetchData(`http://localhost:3000/items/${itemId}`)
        .then(res => setItemData(res.item));
    // eslint-disable-next-line
    }, [])

    return (
        <>
            {itemData ?
            <Wrapper>
                <h2>{itemData.name}</h2>
                <img src={itemData.imageSrc} alt={itemData.name}/>
                <button>Add to cart</button>
            </Wrapper>
            : <Loading />
            }
        </>
    );
};

const Wrapper = styled.div`
    position: absolute;
    top: ${HEADER_HEIGHT};
`;


export default ItemDetails;