import React, { useState, useEffect } from "react";
import axios from "axios";
import { XIcon, SearchIcon } from "@heroicons/react/outline";
import SearchbarListItem from "./SearchbarListItem";
const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/anime/?filter[text]=${inputValue}`
      );
      const responseData = await response.data.data;
      setAnimeList(responseData);
      console.log(responseData);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);
  const handleFocus = () => {
    setVisible(true);
  };
  const handleBlur = () => {
    setVisible(false);
    setInputValue("");
  };
  const handleCloseSearchbarList = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="flex align-center items-center relative">
        <input
          type="text"
          placeholder="Nhập tên anime để tìm kiếm ..."
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          className="search-input"
        />
        <div className="relative">
          {!visible ? (
            <SearchIcon className="search-icon" />
          ) : (
            <XIcon className="search-icon" onClick={handleCloseSearchbarList} />
          )}
        </div>
      </div>
      <ul className="absolute w-full top-12 max-h-96 h-96 overflow-auto no-scrollbar z-0">
        <SearchbarListItem animeList={animeList} />
      </ul>
    </>
  );
};
export default SearchInput;
