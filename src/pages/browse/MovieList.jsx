import React, { useEffect, useState } from "react";
import { requests } from "../DataAPI";
import styles from "./MovieList.module.css";
import MovieDetail from "./MovieDetail";

function MovieList({ category }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/movies${category}`
        );
        if (!response.ok) {
          throw new Error("Không thể tải dữ liệu từ API");
        }
        const data = await response.json();

        // Loại bỏ các phim không có đường dẫn hình ảnh hoặc đường dẫn bị lỗi
        const filteredMovies = data.results.filter((movie) => {
          const hasValidBackdropPath =
            movie.backdrop_path && movie.backdrop_path !== "null";
          const hasValidPosterPath =
            movie.poster_path && movie.poster_path !== "null";
          return hasValidBackdropPath || hasValidPosterPath;
        });

        setMovies(filteredMovies);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };

    fetchMovie();
  }, [category]);

  const handleMovieClick = (movie) => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      // Nếu bạn nhấp lại vào phim đã chọn, đóng phim chi tiết
      setSelectedMovie(null);
    } else {
      // Chọn một phim mới
      setSelectedMovie(movie);
    }
  };
  return (
    <div className={styles["movie-list"]}>
      <div className={styles["movie-list__container"]}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles["movie-list__item"]}>
            {category === requests.fetchNetflixOriginals ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => handleMovieClick(movie)} // Đặt onClick để mở chi tiết phim khi ảnh được nhấp
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                onClick={() => handleMovieClick(movie)} // Đặt onClick để mở chi tiết phim khi ảnh được nhấp
              />
            )}
          </div>
        ))}
        {/* MovieDetail component */}
      </div>
      {selectedMovie && <MovieDetail movieData={selectedMovie} />}
    </div>
  );
}

export default MovieList;
