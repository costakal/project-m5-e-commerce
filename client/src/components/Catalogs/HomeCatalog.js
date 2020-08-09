import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import CatalogItem from "../Item/CatalogItem";
import Loading from "../Loading";
import { requestAllItems, receiveAllItems } from "../../actions";
import { fetchData } from "../../handlers";

const HomeCatalog = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.itemsReducer.items);
    const status = useSelector(state => state.itemsReducer.status);

    console.log(items);

    useEffect(() => {   
        dispatch(requestAllItems());
        fetchData('http://localhost:3000/items')
        .then(res => dispatch(receiveAllItems(res))); 
    // eslint-disable-next-line    
    }, [])

    return (
        <>
            {status === 'ready' ?
            <Catalog>
                {items.items.map(item =>                                 
                    <CatalogItem key={`home-catalog-${item._id}`} item={item}/>
                )}
            </Catalog>
            : <Loading />}
        </>
    );

};

const Catalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 125px;
`;

export default HomeCatalog;
