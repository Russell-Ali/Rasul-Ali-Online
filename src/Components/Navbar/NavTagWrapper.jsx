import { Link, useLocation } from "react-router-dom";

import NavTag from "./NavTag";
import styles from "./NavTagWrapper.module.css";
const NavTagWrapper = () => {
  const location = useLocation();
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <NavTag
          TAG="projects"
          visible={location.pathname === "/" ? true : false}
        />
      </Link>
      <Link to="/about">
        <NavTag
          TAG="about me"
          visible={location.pathname === "/about" ? true : false}
        />
      </Link>
    </div>
  );
};

export default NavTagWrapper;
