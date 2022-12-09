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
import ProfilePic from "../assets/Eunice.jpeg";
import CV from "../assets/MyCV.pdf";
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
        <div className={`profile-details ${fadeIn ? "fadeIn" : null}`}>
          <div className={`colz ${fadeIn ? "fadeIn" : null}`}>
            <div className={`colz-icon ${fadeIn ? "fadeIn" : null}`}>
              {skillsList}
            </div>
          </div>

          <div className={`profile-details-name ${fadeIn ? "fadeIn" : null}`}>
            <span className={`primary-text ${fadeIn ? "fadeIn" : null}`}>
              {" "}
              Hello, I'M{" "}
              <SectionTitle
                className={`highlighted-text ${fadeIn ? "fadeIn" : null}`}
              >
                Eunice Abieyuwa Igbinedion
              </SectionTitle>
            </span>
          </div>
          <div className={`profile-details-role ${fadeIn ? "fadeIn" : null}`}>
            <span className={`primary-text ${fadeIn ? "fadeIn" : null}`}>
              {" "}
              <h3>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🌐",
                    3000,
                    "Frontend Developer 👩‍💻",
                    3000,
                    "React Developer 👩‍💻",
                    3000,
                    "Database Administrator 📊",
                    3000,
                    "Sales Enthusiast 🔮",
                    3000,
                  ]}
                />
              </h3>
              <span
                className={`profile-role-tagline ${fadeIn ? "fadeIn" : null}`}
              >
                Master of building application with Frontend operations. <br />
                As a Brand Marketer-turned-Front-End Developer, my goal is to
                provide solutions that create a better user experience. <br />
                By combining my marketing expertise with my technical skills, I
                can push your business forward.
              </span>
            </span>
          </div>
          <div className={`profile-options ${fadeIn ? "fadeIn" : null}`}>
            <button className={`primary-btn ${fadeIn ? "fadeIn" : null}`}>
              {""}
              <LinkScroll
                // className="hamburger-nav-link"
                // activeClass="nav-link-active"
                to="messages"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Contact
              </LinkScroll>{" "}
            </button>
            <a href={CV} download={CV} alt="My-Resume">
              <button className={`highlighted-btn ${fadeIn ? "fadeIn" : null}`}>
                Resume
              </button>
            </a>
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
