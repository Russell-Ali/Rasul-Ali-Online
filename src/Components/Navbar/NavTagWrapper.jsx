import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import NavTag from "./NavTag";
import styles from "./NavTagWrapper.module.css";
const NavTagWrapper = () => {
  const [isHome, setHome] = useState(useLocation().pathname);
  return (
    <div className={styles.wrapper}>
      <Link
        to="/"
        onClick={() => {
          setHome("/");
        }}
      >
        <NavTag TAG="projects" visible={isHome === "/" ? true : false} />
      </Link>
      <Link
        to="/about"
        onClick={() => {
          setHome("/about");
        }}
      >
        <NavTag TAG="about me" visible={isHome === "/about" ? true : false} />
      </Link>
    </div>
  );
};

export default NavTagWrapper;
