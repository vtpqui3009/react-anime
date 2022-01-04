import { useState, useEffect } from "react";
import axios from "axios";
const useMainAnimeList = (url, dependencies) => {
  const [animeList, setAnimeList] = useState([]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${url}`
      );
      const responseData = await response.data.data;
      setAnimeList(responseData);
      console.log(responseData);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [url]);
  return animeList;
};
export default useMainAnimeList;
