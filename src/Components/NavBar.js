import { useContext } from "react";
import { animateScroll as scroll, Link as LinkScroll } from "react-scroll";
import PDF from "../assets/Eunice-igbinedion-resume.pdf";
import icon from "../assets/icon.png";
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
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              AboutMe
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
              Techskills
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
              offset={0}
              duration={700}
            >
              ContactMe
            </LinkScroll>
          </li>
          <li>
            <a
              className="nav-link-resume"
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
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
