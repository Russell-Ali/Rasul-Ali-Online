import { Link } from "react-router-dom";
import LogoSvg from "./LogoSvg";
const Logo = () => {
  return (
    <Link to="/">
      <LogoSvg />
    </Link>
  );
};

export default Logo;
