import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import { AroundSvg, CircleSvg, LinesSvg } from "./LogoSvg";
const Logo = () => {
  return (
    <div
      className={styles.logoWrapper}
      style={{ width: `${window.innerWidth - 50} ` }}
    >
      <Link to="/">
        <LinesSvg />
        <CircleSvg />
        <AroundSvg />
      </Link>
    </div>
  );
};

export default Logo;
