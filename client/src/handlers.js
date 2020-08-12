export const fetchData = async (url, reqObj) => {
  try {
    const res = await fetch(url, reqObj);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
