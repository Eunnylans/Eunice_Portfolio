import { useContext } from "react";
import { animateScroll as scroll, Link as LinkScroll } from "react-scroll";
import icon from "../assets/EuniceLogo.png";
import UIContext from "../context/ui-context";
import ThemeToggleButton from "../UIcomponents/ThemeToggleButton";

const Navbar = () => {
  const uiCtx = useContext(UIContext);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  return (
    <header>
      <nav className="navbar">
        <div className="home-icon">
          <img src={icon} alt="home" onClick={scrollToTop} />
        </div>
        <ul className={`navbar-links-list ${uiCtx.isDark ? "dark" : null}`}>
          <li>
            <LinkScroll
              className="nav-link"
              activeClass="nav-link-active"
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Home
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              className="nav-link"
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
              className="nav-link"
              activeClass="nav-link-active"
              to="techskills"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Skills
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              className="nav-link"
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
              className="nav-link"
              activeClass="nav-link-active"
              to="messages"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Contact
            </LinkScroll>
          </li>
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
