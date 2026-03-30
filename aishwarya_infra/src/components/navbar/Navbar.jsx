import { useState } from "react";
import company from "../../assets/company-logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <nav className="navbar-container">

      <div className="navbar-section">

        <div className="company-img">
          <Link to="/" onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);}}><img src={company} alt="logo" className="company-logo"/></Link>
         
        </div>

        {/* Hamburger / Close Icon */}
        <div
          className="hamburger-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="close-icon"></span>
          ) : (
            <span className="solar--hamburger-menu-outline"></span>
          )}
        </div>

        <ul className={`navbar-elements ${menuOpen ? "active" : ""}`}>

          <li>
            <Link to="/" onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}>About</Link>
          </li>

          {/* Projects Dropdown */}
          <li className="dropdown">

            <div
              className="dropdown-title"
              onClick={() => setProjectOpen(!projectOpen)}
            >
              Projects
              <span className="arrow"></span>
            </div>

            <ul className={`dropdown-menu ${projectOpen ? "show" : ""}`}>

              <li>
                <Link to="/projects/upcoming" onClick={() => {
                  setMenuOpen(false);
                  setProjectOpen(false);
                }}>
                  Upcoming
                </Link>
              </li>

              <li>
                <Link to="/projects/completed" onClick={() => {
                  setMenuOpen(false);
                  setProjectOpen(false);
                }}>
                  Completed
                </Link>
              </li>

            </ul>

          </li>

          <li>
            <Link to="/blog" onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}>Blog</Link>
          </li>

          <li>
            <Link to="/services" onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}>Services</Link>
          </li>

          <li>
            <Link to="/gallery" onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}>Gallery</Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}>Contact</Link>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;