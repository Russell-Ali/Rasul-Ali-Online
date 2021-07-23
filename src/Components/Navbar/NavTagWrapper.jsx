import { Link } from "react-router-dom";

import NavTag from "./NavTag";
import styles from "./NavTagWrapper.module.css";
const NavTagWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <NavTag TAG="projects" />
      </Link>
      <Link to="/about">
        <NavTag TAG="about me" />
      </Link>
    </div>
  );
};

export default NavTagWrapper;
