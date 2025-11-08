import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} className="nav-logo" alt="backroads" />
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navbar;
