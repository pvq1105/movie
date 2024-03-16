import React, { useEffect, useState } from "react";
import { requests } from "../DataAPI";
import styles from "./Banner.module.css";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState({});

  useEffect(() => {
    async function fetchNetflixOriginals() {
      try {
        const response = await fetch(
          `http://localhost:3001/api/movies${requests.fetchNetflixOriginals}`
        );

        if (!response.ok) {
          throw new Error("Không lấy được dữ liệu từ API");
        }
        const data = await response.json();

        // Lấy bộ phim đầu tiên từ danh sách Netflix Originals
        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length - 1)];
        // Đặt giá trị cho bannerMovie
        setBannerMovie(randomMovie);
      } catch (error) {
        console.error("loi roi", error);
      }
    }

    // Gọi hàm fetchNetflixOriginals trong useEffect
    fetchNetflixOriginals();
  }, []);

  return (
    <div className={styles.title}>
      <div className={styles["img-container"]}>
        <img
          className={
            !bannerMovie.overview || bannerMovie.overview === ""
              ? styles.image1
              : styles.image
          }
          src={`https://image.tmdb.org/t/p/w500${bannerMovie.backdrop_path}`}
          alt={bannerMovie.name || "Alternative text"}
        />
      </div>

      <div className={styles["banner__buttons"]}>
        <h1>{bannerMovie.name}</h1>
        <div className={styles.button}>
          <button className={styles["banner__button"]}>Play</button>
          <button className={styles["banner__button"]}>My List</button>
        </div>
        <p className="banner__description">
          {bannerMovie &&
          bannerMovie.overview &&
          bannerMovie.overview.length > 100
            ? bannerMovie.overview.slice(0, 100) + " ..."
            : bannerMovie.overview}
        </p>
      </div>
    </div>
  );
};

export default Banner;
