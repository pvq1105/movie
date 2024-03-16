import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Home from "./Home";
import styles from "./Browse.module.css";

function Browse(props) {
  return (
    <div className={styles.browse}>
      <NavBar />
      <Banner />
      <Home />
    </div>
  );
}

export default Browse;
