import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import UIContext from '../context/ui-context';
import SectionTitle from '../UIcomponents/SectionTitle';
import { FaSass } from "react-icons/fa";
import {
  SiCss3,
  SiFigma,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNpm,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import Typical from "react-typical";
import ProfilePic from "../assets/Eunice.jpeg";


const skillsArr = [
  {
    name: "react",
    icon() {
      return <SiReact className={`skillsIcon react`} />;
    },
  },
  {
    name: "redux",
    icon() {
      return <SiRedux className={`skillsIcon redux`} />;
    },
  },
  {
    name: "javascript",
    icon() {
      return <SiJavascript className={`skillsIcon javascript`} />;
    },
  },
  {
    name: "html",
    icon() {
      return <SiHtml5 className={`skillsIcon html`} />;
    },
  },
  {
    name: "css",
    icon() {
      return <SiCss3 className={`skillsIcon css`} />;
    },
  },
  {
    name: "tailwind css",
    icon() {
      return <SiTailwindcss className={`skillsIcon tailwindcss`} />;
    },
  },
  {
    name: "sass",
    icon() {
      return <FaSass className={`skillsIcon sass`} />;
    },
  },
  {
    name: "jest",
    icon() {
      return <SiJest className={`skillsIcon jest`} />;
    },
  },
  {
    name: "firebase",
    icon() {
      return <SiFirebase className={`skillsIcon firebase`} />;
    },
  },
  {
    name: "figma",
    icon() {
      return <SiFigma className={`skillsIcon figma`} />;
    },
  },
  {
    name: "npm",
    icon() {
      return <SiNpm className={`skillsIcon npm`} />;
    },
  },
];

const AboutMe = () => {
  const uiCtx = useContext(UIContext);
  const ref = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  const onScroll = () => {
    const topPos = ref.current.offsetTop;
    const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (
      topPos + 150 < window.scrollY + window.innerHeight &&
      bottomPos > window.scrollY
    ) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const skillsList = skillsArr.map((skill) => {
    let icon = skill.icon();
    return (
      <div className="skill" key={skill.name}>
        {icon}
      </div>
    );
  });

  return (
    <div className="profile-container">
      <div
        className={`profile-parent ${uiCtx.isDark ? "dark" : null}`}
        ref={ref}
      >
        <div  className={`profile-details ${fadeIn ? "fadeIn" : null}`}>
          <div className="colz">
            <div className="colz-icon">
            {skillsList}
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <SectionTitle className="highlighted-text">
                Eunice Abieyuwa Igbinedion
              </SectionTitle>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🌐",
                    1000,
                    "Frontend Developer 👩‍💻",
                    1000,
                    "React Developer 👩‍💻",
                    1000,
                    "Database Administrator 📊",
                    1000,
                    "Sales Enthusiast 🔮",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Master of building application with Frontend operations. <br />
                As a Brand Marketer-turned-Front-End Developer, my goal is to
                provide solutions that create a better user experience. <br />
                By combining my marketing expertise with my technical skills, I
                can push your business forward.
              </span>
            </span>
          </div>
          <div className={`profile-options ${fadeIn ? "fadeIn" : null}`}>
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="MyCV.pdf" download="Eunice.A Igbinedion MyCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div  className={`profile-picture ${fadeIn ? "fadeIn" : null}`}>
          <img
            src={ProfilePic}
            alt="Profile"
            className="profile-picture-background"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
