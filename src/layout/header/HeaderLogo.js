import Logo from "./logo-header.png";
import { Link } from "react-router-dom";
const HeaderLogo = () => {
  return (
    <Link to="/">
      <img src={Logo} alt="header-logo" className="object-cover mr-2" />
    </Link>
  );
};
export default HeaderLogo;
