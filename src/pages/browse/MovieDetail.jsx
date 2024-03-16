import React, { useState, useEffect } from "react";
import styles from "./MovieDetail.module.css";

function MovieDetail({ movieData }) {
  const [trailerKey, setTrailerKey] = useState(""); // Sử dụng hook useState để tạo state 'trailerKey' và hàm 'setTrailerKey' để cập nhật state này.
  const [showTrailer, setShowTrailer] = useState(true); // Tạo state 'showTrailer' cho việc ẩn/hiện video trailer.
  // console.log(movieData.id);
  const fetchTrailerData = async (movieId) => {
    try {
      const response = await fetch(
        // `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`
        `http://localhost:3001/api/movies/video/${movieId}`
      ); // Gọi API để lấy thông tin trailer từ nguồn dữ liệu TMDB.
      if (!response.ok) {
        throw new Error("Failed to fetch trailer data"); // Xử lý lỗi nếu yêu cầu API thất bại.
      }

      const data = await response.json(); // Chuyển đổi dữ liệu JSON từ phản hồi API.
      console.log(data.id);
      setTrailerKey(data.id);
    } catch (error) {
      console.error("Error fetching trailer data: ", error); // Xử lý lỗi nếu có lỗi khi gọi API trailer.
    }
  };

  useEffect(() => {
    fetchTrailerData(movieData.id); // Sử dụng hook useEffect để gọi hàm fetchTrailerData khi giá trị 'movieData.id' thay đổi.
  }, [movieData.id]);
  console.log(trailerKey);
  return (
    <div className={styles.moviedetail}>
      <div className={styles.content}>
        <h2 className={styles["movieData-title"]}>{movieData.title}</h2>
        <p> Release Date : {movieData.release_date}</p>
        <p>Vote :{movieData.vote_average}/10</p>
        <p className={styles["movieData-overview"]}>{movieData.overview}</p>
      </div>
      {/*nếu ko có bản trailer thì hiển thị hình ảnh backdrop */}
      <div className="trailer">
        {trailerKey ? (
          showTrailer ? (
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Movie Trailer"
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
              alt="abc"
            />
          )
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
            alt="abc"
          />
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
