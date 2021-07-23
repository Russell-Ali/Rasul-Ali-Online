import styles from "./Logo.module.css";
import { ReactComponent as LogoCircle } from "./LogoCircle.svg";
import { ReactComponent as LogoLines } from "./LogoLines.svg";
const Logo = () => {
  return (
    <>
      <LogoCircle className={`${styles.logo} ${styles.circle}`} />
      <LogoLines className={`${styles.logo} ${styles.lines}`} />
    </>
  );
};

export default Logo;
