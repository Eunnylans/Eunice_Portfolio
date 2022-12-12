import { useContext } from "react";
import UIContext from "../context/ui-context";
import Contacts from "./Contacts";
import Particles from "./Particles";
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {
  const uiCtx = useContext(UIContext);

  return (
    <div className="hero" id="hero">
      <div className={`hero-content ${uiCtx.isDark ? "dark" : null}`}>
        <h1>Hello 👋 My name is Eunice Abieyuwa Igbinedion</h1>
        <p>
          <span className="hero-colorText">
          ✨I design and build user-friendly websites.✨
          </span>
          &nbsp; <br />✨✨✨✨ Reach me if you want to create something
          beautiful✨✨✨✨!!<br />
          click the link below to <br />
        
        <button><LinkScroll
        // className="hamburger-nav-link"
        // activeClass="nav-link-active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
      >
      View my Work
      </LinkScroll>{" "} </button>
      </p>
      </div>
      <Contacts />
      <Particles />
    </div>
  );
};

export default Hero;
