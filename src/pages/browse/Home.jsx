import React from "react";
import MovieList from "./MovieList";
import { requests } from "../DataAPI";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hiển thị danh sách phim cho từng danh mục */}
      <MovieList category={requests.fetchNetflixOriginals} />

      <p className={styles.category}>Xu hướng</p>
      <MovieList category={requests.fetchTrending} />
      <p className={styles.category}>Top xem nhiều</p>
      <MovieList category={requests.fetchTopRated} />
      <p className={styles.category}>Hành động</p>
      <MovieList category={requests.fetchActionMovies} />
      <p className={styles.category}>Hài</p>
      <MovieList category={requests.fetchComedyMovies} />
      <p className={styles.category}>Kinh dị</p>
      <MovieList category={requests.fetchHorrorMovies} />
      <p className={styles.category}>Lãng Mạn</p>
      <MovieList category={requests.fetchRomanceMovies} />
      <p className={styles.category}>Tài liệu</p>
      <MovieList category={requests.fetchDocumentaries} />
    </div>
  );
};

export default Home;
