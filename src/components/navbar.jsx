import "./navbar.css";

import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <Link to="Home" smooth={true}>
            SUPUNNIKA
          </Link>
        </div>
        <div className="nav-right">
          <Link to="Skill" smooth={true}>
            Skills
          </Link>
          <Link to="Skill" smooth={true}>
            Projects
          </Link>
          <Link to="Contact" smooth={true}>
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
