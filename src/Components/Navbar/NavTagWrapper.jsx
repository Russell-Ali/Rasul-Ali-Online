import { Link, useLocation } from "react-router-dom";

import NavTag from "./NavTag";
import styles from "./NavTagWrapper.module.css";
const NavTagWrapper = () => {
  const location = useLocation();
  return (
    <div className={styles.wrapper}>
      <Link to="/" style={{ outline: "none" }}>
        <NavTag
          TAG="locations"
          visible={location.pathname === "/" ? true : false}
        />
      </Link>
      <Link to="/about" style={{ outline: "none" }}>
        <NavTag
          TAG="about me"
          visible={location.pathname === "/about" ? true : false}
        />
      </Link>
    </div>
  );
};

export default NavTagWrapper;
