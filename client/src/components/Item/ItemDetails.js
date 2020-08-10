import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { fetchData } from '../../handlers';
import Loading from '../Loading';
import { HEADER_HEIGHT } from '../../constants';
import { useSelector } from 'react-redux';

const ItemDetails = () => {
    const items = useSelector(state => state.itemsReducer.items);
    const { itemId } = useParams();
    const [itemData, setItemData] = useState(null);

    const handleAddToCart = (name) => {
        console.log(name);
    };

    
    useEffect(() => {
        if (items) {
            setItemData(items.items.find(i => i._id == itemId));
        }
        
    // // eslint-disable-next-line
    }, [items])
    

    return (
        <>
            {itemData ?
            <Wrapper>
                <h2>{itemData.name}</h2>
                <img src={itemData.imageSrc} alt={itemData.name}/>
                <button onClick={() => handleAddToCart(itemData.name)}>Add to cart</button>
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