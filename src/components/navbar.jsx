import { Link } from "react-scroll";
import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive); //เป็นfalseไม่ได้ เพราะมันจะเป็นการhard code
  };

  const closeToggle = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className="inner-nav">
        <div className={`navbar ${isActive ? "active" : ""}`}>
          <Link id="item" to="Home" smooth={true} onClick={closeToggle}>
            <p id="nav-name">SUPUNNIKA</p>
          </Link>
          <ul className={`nav-menu ${isActive ? "active" : ""}`}>
            <li className="nav-item">
              <Link id="item" to="Skill" smooth={true} onClick={closeToggle}>
                <p id="nav-skill">Skills</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link id="item" to="Project" smooth={true} onClick={closeToggle}>
                <p id="nav-project">Projects</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link id="item" to="Contact" smooth={true} onClick={closeToggle}>
                <p id="nav-contact">Contact Me</p>
              </Link>
            </li>
          </ul>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
