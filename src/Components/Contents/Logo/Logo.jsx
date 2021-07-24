import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { ReactComponent as LogoCircle } from "./LogoCircle.svg";
import { ReactComponent as LogoLines } from "./LogoLines.svg";
const Logo = () => {
  return (
    <Link to="/">
      <LogoCircle className={`${styles.logo} ${styles.circle}`} />
      <LogoLines className={`${styles.logo} ${styles.lines}`} />
    </Link>
  );
};

export default Logo;
