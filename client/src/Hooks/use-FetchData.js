import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchData } from "../handlers";
import { error404 } from "../actions";

const UseFetchData = (requestAction, receiveAction, url) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAction());
    fetchData(url).then((res) => {
      if (res.status === 200) dispatch(receiveAction(res));
      if (res.status === 404) dispatch(error404(res.error));
    });
    // eslint-disable-next-line
  }, []);
};

export default UseFetchData;
