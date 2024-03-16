import React, { useState } from "react";
import styles from "./ResultList.module.css";
import MovieDetail from "../browse/MovieDetail";

const ResultList = ({ results }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Hàm để mở thông tin của phim khi người dùng click vào hình
  const showMovieDetail = (movie) => {
    setSelectedMovie(movie);
    if (selectedMovie && selectedMovie.id === movie.id) {
      // Nếu bạn nhấp lại vào phim đã chọn, đóng phim chi tiết
      setSelectedMovie(null);
    } else {
      // Chọn một phim mới
      setSelectedMovie(movie);
    }
  };
  return (
    <>
      <p className={results.length > 0 ? styles.results : styles.results1}>
        Search Results
      </p>
      <div className={styles["result-list"]}>
        {results.map((movie) => (
          <div key={movie.id} className={styles["movie-item"]}>
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
              className={styles["movie-image"]}
              onClick={() => showMovieDetail(movie)}
            />
          </div>
        ))}
      </div>
      {selectedMovie && <MovieDetail movieData={selectedMovie} />}
    </>
  );
};

export default ResultList;
