import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { fetchData } from "../handlers";


const UseFetchData = (requestAction, receiveAction, url) => {
    const dispatch = useDispatch();

    useEffect(() => {   
      dispatch(requestAction());
      fetchData(url)
      .then(res => dispatch(receiveAction(res))); 
    // eslint-disable-next-line    
    }, [])
  
};

export default UseFetchData;