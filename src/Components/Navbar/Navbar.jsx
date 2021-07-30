import Logo from "../Contents/Logo/Logo";
import Divider from "./Divider";
import styles from "./Navbar.module.css";
import NavTagWrapper from "./NavTagWrapper";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [Width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  console.log(window.innerWidth);
  return (
    <div
      className={styles.navbar}
      style={Width > 574 ? { width: Width } : { width: "100%" }}
    >
      <Logo />
      <NavTagWrapper />
      <Divider />
    </div>
  );
};

export default Navbar;
