import { useState } from "react";
import company from "../../assets/company-logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setProjectOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-section">
        <div className="company-img">
          <NavLink to="/" end onClick={closeMenus}>
            <img
              src={company}
              alt="logo"
              className="company-logo"
            />
          </NavLink>
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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "active-nav-link" : ""
              }
              onClick={closeMenus}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-nav-link" : ""
              }
              onClick={closeMenus}
            >
              About
            </NavLink>
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
                <NavLink
                  to="/projects/upcoming"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : ""
                  }
                  onClick={closeMenus}
                >
                  Upcoming
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects/completed"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : ""
                  }
                  onClick={closeMenus}
                >
                  Completed
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "active-nav-link" : ""
              }
              onClick={closeMenus}
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "active-nav-link" : ""
              }
              onClick={closeMenus}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "active-nav-link" : ""
              }
              onClick={closeMenus}
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active-nav-link" : ""
              }
              onClick={closeMenus}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;