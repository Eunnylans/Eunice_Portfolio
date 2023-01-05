import { useContext, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import UIContext from "../context/ui-context";
import ThemeToggleButton from "../UIcomponents/ThemeToggleButton";

import PDF from "../assets/MyCV.pdf";

const HamburgerMenu = () => {
  const uiCtx = useContext(UIContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav
        className={`hamburger-menu ${uiCtx.isDark ? "dark" : null} ${
          menuOpen ? "menuIcon-active" : ""
        }`}
      >
        <ThemeToggleButton />
        {/* HAMBURGER ICON */}
        <div className="hamburger-center" onClick={menuHandler}>
          <div></div>
        </div>
        {/* CONTENT */}

        {menuOpen && (
          <ul
            className={`hamburger-menu-list  ${
              menuOpen ? "menu-open" : "menu-close"
            }`}
          >
            <li>
              <LinkScroll
                className="hamburger-nav-link"
                activeClass="nav-link-active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                About
              </LinkScroll>
            </li>

            <li>
              <LinkScroll
                className="hamburger-nav-link"
                activeClass="nav-link-active"
                to="techskills"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Techskills
              </LinkScroll>
            </li>

            <li>
              <LinkScroll
                className="hamburger-nav-link"
                activeClass="nav-link-active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={900}
              >
                Projects
              </LinkScroll>
            </li>

            <li>
              <LinkScroll
                className="hamburger-nav-link"
                activeClass="nav-link-active"
                to="messages"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Contact
              </LinkScroll>
            </li>

            <li>
              <a
                className="hamburger-nav-link"
                href={PDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default HamburgerMenu;
