import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useContext } from "react";
import { Link as LinkScroll } from "react-scroll";
import Typist from "react-text-typist";
import UIContext from "../context/ui-context";
import Contacts from "./Contacts";
import Particles from "./Particles";

const Hero = () => {
  const uiCtx = useContext(UIContext);

  return (
    <div className="hero" id="hero">
      <div className={`hero-content ${uiCtx.isDark ? "dark" : null}`}>
        <h1>
          Hello 👋 My name is Eunice Abieyuwa Igbinedion
          <Typist
            sentences=""
            cursorColor={"#0cbfae"}
            typingSpeed={120}
            loop={false}
          />
        </h1>
        <p>
          <span className="hero-colorText">
            ✨I design and build user-friendly websites✨
          </span>
          &nbsp; <br />
          ✨✨ Reach me if you want to create something beautiful !!✨✨
          <br />
          click the link below to <br />
          <LinkScroll
            // className="hamburger-nav-link"
            // activeClass="nav-link-active"
            className="hero-view"
            to="projects"
            spy={true}
            smooth={true}
            offset={-20}
            duration={700}
          >
            view my work
            <KeyboardArrowDownIcon className="icon" />
          </LinkScroll>{" "}
        </p>
      </div>
      <Contacts />
      <Particles />
    </div>
  );
};

export default Hero;
