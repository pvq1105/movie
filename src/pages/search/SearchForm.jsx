import React, { useState } from "react";
import styles from "./SearchForm.module.css";
import "bootstrap/dist/css/bootstrap.css";

const SearchForm = ({ updateResults }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const language = "en";

  const changeInput = (event) => {
    setQuery(event.target.value);
    setIsInputEmpty(false); // Đặt trạng thái thành false khi người dùng thay đổi giá trị
  };

  const resetSearch = () => {
    window.location.reload();
  };

  const search = async (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setError("please input gia tri");
      setIsInputEmpty(true); // Đặt trạng thái thành true nếu query trống
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/movies/search/${query}`
      );
      if (!response.ok) {
        throw new Error("Không thể tải dữ liệu từ API");
      }
      const data = await response.json();

      updateResults(data.results);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu từ API:", error);
    }
  };

  return (
    <>
      <form className={styles["form-search"]} onSubmit={search}>
        <input
          type="text"
          className={
            isInputEmpty ? styles["input-search1"] : styles["input-search"]
          }
          value={query}
          onChange={changeInput}
        />
        <svg
          className={styles["icon-search"]}
          fill="#ccc"
          aria-hidden="true"
          data-prefix="fas"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
        <h5>Search Advanced</h5>
        <div className={styles["button-search"]}>
          <button type="button" className="btn btn-light" onClick={resetSearch}>
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      {/* {error && <p>please input gia tri</p>} */}
    </>
  );
};

export default SearchForm;
