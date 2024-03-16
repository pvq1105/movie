import React, { useState } from "react";

const SearchAV = () => {
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState("");
  const [mediaType, setMediaType] = useState("all");
  const [language, setLanguage] = useState("en");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchURL = `http://localhost:3001/api/movies/search?keyword=${keyword}&genre=${genre}&mediaType=${mediaType}&language=${language}&year=${year}`;
    console.log(searchURL);

    // You should make an API call here using fetch or axios to send the search parameters to the backend
    // Example: fetch(searchURL).then(response => response.json()).then(data => console.log(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="tv">TV</option>
          <option value="person">Person</option>
        </select>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">en</option>
          <option value="ja">ja</option>
          <option value="ko">ko</option>
        </select>
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchAV;
