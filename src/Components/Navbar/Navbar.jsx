import Logo from "../Contents/Logo/Logo";
import Divider from "./Divider";
import styles from "./Navbar.module.css";
import NavTagWrapper from "./NavTagWrapper";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <NavTagWrapper />
      <Divider />
    </div>
  );
};

export default Navbar;
