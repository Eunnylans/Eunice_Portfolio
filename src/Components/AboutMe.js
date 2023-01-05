import React, { useContext, useLayoutEffect, useRef, useState } from "react";
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
import { Link as LinkScroll } from "react-scroll";
import Typical from "react-typical";
import PDF from "../assets/Eunice-igbinedion-resume.pdf";
import ProfilePic from "../assets/Eunnylans.jpg";
import UIContext from "../context/ui-context";
import SectionTitle from "../UIcomponents/SectionTitle";

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

const Aboutme = () => {
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
    <div
      className={`aboutme profile-container ${uiCtx.isDark ? "dark" : null}`}
      ref={ref}
    >
      <div className={`profile-parent ${fadeIn ? "fadeIn" : null}`}>
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">{skillsList}</div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <SectionTitle className="highlighted-text">
                A Fullstack(MERN) Web & App Developer
              </SectionTitle>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h3>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "MongoDb 📚",
                    3000,
                    "Express 🟩",
                    3000,
                    "React 🧊",
                    3000,
                    "NodeJs 🔮",
                    3000,
                    "Sales 👩‍💻",
                    3000,
                    "Marketing 👩‍💻",
                    3000,
                  ]}
                />
              </h3>
              <span className="profile-role-tagline">
                I am a result-driven web developer, an avid learner,
                <br /> Am quick in understanding new technologies. <br />
                With my background in Sales & Marketing and passion <br />
                for Frontend development. <br />
                I am eager to develop efficient digital solutions <br />
                that create a positive impact in the world
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="primary-btn">
              {""}
              <LinkScroll
                to="messages"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                Contact
              </LinkScroll>{" "}
            </button>

            <button className="highlighted-btn">
              <a
                className="highlighted-btn"
                href={PDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="profile-picture">
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

export default Aboutme;
