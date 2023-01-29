import { Divider } from "@material-ui/core";
import { saveAs } from "file-saver";
import React, { useContext, useRef, useState } from "react";
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
import Fade from "react-reveal/Fade";
import { Link as LinkScroll } from "react-scroll";
import Typical from "react-typical";
import PDF from "../assets/Eunice-igbinedion-resume.pdf";
import ProfilePic from "../assets/Eunnylans.jpg";
import UIContext from "../context/ui-context";
import SectionTitle from "../UIcomponents/SectionTitle";
import Techskills from "./Techskills";

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

  const skillsList = skillsArr.map((skill) => {
    let icon = skill.icon();
    return (
      <div className="skill" key={skill.name}>
        {icon}
      </div>
    );
  });

  const saveFile = () => {
    saveAs("https://eunice-igbindedion-resume.netlify.app/");
  };

  return (
    <div
      className={`aboutme profile-container ${uiCtx.isDark ? "dark" : null}`}
      ref={ref}
    >
      <div
        className={`profile-content ${uiCtx.isDark ? "dark" : null}`}
        ref={ref}
      >
        <Fade left>
          <SectionTitle className={`profile-title ${fadeIn ? "fadeIn" : null}`}>
            About Me
          </SectionTitle>
        </Fade>
        <Fade right>
          <Divider
            className="divider"
            style={{
              border: "0px",
              width: "110px",
              height: "4px",
              backgroundColor: "#0cbfae",
              marginLeft: "46%",
              marginBottom: "40px",
            }}
          ></Divider>
        </Fade>
      </div>

      <div className={`profile-parent ${fadeIn ? "fadeIn" : null}`}>
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">{skillsList}</div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              <SectionTitle className="highlighted-text">
                Web & App Developer
              </SectionTitle>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h3>
                {" "}
                <Typical
                  steps={[
                    "MongoDb 📚",
                    5000,
                    "Express 🟩",
                    5000,
                    "React 🧊",
                    5000,
                    "NodeJs 🔮",
                    5000,
                    "Sales 👩‍💻",
                    5000,
                    "Marketing 👩‍💻",
                    5000,
                  ]}
                  loop={Infinity}
                />
              </h3>
              <span className="profile-role-tagline">
                I am a resourceful web developer, Am quick in understanding new
                technologies. With my background in Sales & Marketing and
                passion for Frontend development I can help develop efficient
                and sustainable digital solutions that can push your business
                forward.
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
                offset={5}
                duration={700}
              >
                Contact
              </LinkScroll>{" "}
            </button>

            <button
              className="highlighted-btn"
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
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
      <Techskills />
    </div>
  );
};

export default Aboutme;
