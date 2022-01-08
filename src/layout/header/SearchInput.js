import React, { useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/outline";
import SearchbarListItem from "./SearchbarListItem";
import useMainAnimeList from "../../hooks/useAnimeList";
const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const animeList = useMainAnimeList(
    `/anime/?filter[text]=${inputValue}`,
    0,
    10
  );
  const [visible, setVisible] = useState(false);
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
      {animeList.length > 0 && (
        <ul className="absolute w-full top-12 max-h-96 h-96 overflow-auto no-scrollbar z-0">
          <SearchbarListItem animeList={animeList} />
        </ul>
      )}
    </>
  );
};
export default SearchInput;
