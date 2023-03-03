import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./defaultLayout.module.css";

const DefaultLayout = () => {
  return (
    <>
      <nav className={styles.navbar}>Welcome to the informative application!</nav>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
