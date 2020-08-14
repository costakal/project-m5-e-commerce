export const fetchData = async (url, reqObj) => {
  try {
    const res = await fetch(url, reqObj);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const stringShortener = (string, companyName) => {
  const wordArray = string.split(" ");
  let newString;
  wordArray[0] === companyName
    ? (newString = wordArray.slice(1, 4))
    : wordArray.slice(0, 3);
  return newString.join(" ");
};
