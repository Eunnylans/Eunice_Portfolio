import { useContext } from "react";
import UIContext from "../context/ui-context";
import Contacts from "./Contacts";
import Particles from "./Particles"

const Hero = () => {
  const uiCtx = useContext(UIContext);

  return (
    <div className="hero" id="hero">
      <div className={`hero-content ${uiCtx.isDark ? "dark" : null}`}>
        <h1>"Hello 👋 My name is Eunice Abieyuwa Igbinedion</h1>
        <p>
          <span className="hero-colorText">
            Sales amd Marketing Enthusiast-turned-Fullstack (MERN) Developer✨
          </span>
          &nbsp;I'm a result-driven developer whose am passionate about software
          architecture and designs✨, <br />I am passionate about understanding
          customers’ needs and I adopt my user-centric mindset to create
          easy-to-use applications. ✨ Reach me if you want to create something
          beautiful✨!!",
        </p>
      </div>
      <Contacts />
      <Particles id="tsparticles" />
    </div>
  );
};

export default Hero;
