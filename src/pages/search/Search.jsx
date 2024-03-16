import React, { useState } from "react";
import SearchForm from "./SearchForm";
import NavBar from "../browse/NavBar";
import styles from "./Search.module.css";
import ResultList from "./ResultList";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]); // Sử dụng hook useState để tạo một state 'searchResults' và một hàm 'setSearchResults' để cập nhật state này.

  const updateSearchResults = (results) => {
    setSearchResults(results); // truyền vào component SearchForm và được gọi khi kết quả tìm kiếm thay đổi để cập nhật state 'searchResults'.
  };
  return (
    <div
      className={searchResults.length === 0 ? styles.search1 : styles.search} // Sử dụng CSS module để đổi class CSS dựa trên độ dài của mảng 'searchResults'.
    >
      <NavBar />
      <div className={styles["search-form"]}>
        <SearchForm updateResults={updateSearchResults} />
      </div>
      <div className={styles.resultList}>
        <ResultList results={searchResults} />
      </div>
    </div>
  );
};

export default Search;
