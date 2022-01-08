import { useState, useEffect } from "react";
import axios from "axios";
const useMainAnimeList = (url, fromNumber, toNumber) => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${url}`
      );
      const responseData = await response.data.data;
      const filterAnimeData = responseData.slice(fromNumber, toNumber);
      setAnimeList(filterAnimeData);
      setIsLoading(false);
    }, 500);
    console.log(isLoading);
    return () => clearTimeout(timer);
  }, [url]);
  return { animeList, isLoading };
};
export default useMainAnimeList;
