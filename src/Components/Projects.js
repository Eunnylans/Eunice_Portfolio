import { Divider } from "@material-ui/core";
import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import project2 from "../assets/Admin-Dashboard.png";
import project3 from "../assets/bbconnected.png";
import project4 from "../assets/CookBook.png";
import project1 from "../assets/GUSAPP.png";
import UIContext from "../context/ui-context";
import SectionTitle from "../UIcomponents/SectionTitle";

const projectArr = [
  {
    title: "GusApp",
    subtitle: "<Personal Project>",
    techName:
      "Angular | Router | Firebase | CSS | Bootstrap | Figma | GithubAPI",
    src: project1,
    alt: "Github User Search App",
    livedemo: "https://gusapp-41a08.firebaseapp.com/",
    github: "https://github.com/Eunnylans/GusApp",
  },
  {
    title: "Admin Dashboard",
    subtitle: "<Personal Project>",
    techName:
      "React | React Router | React Icons | CSS | Material UI | Netlify",
    src: project2,
    alt: "Admin Dashboard",
    livedemo: "https://eunnylans-admin-dashboard.netlify.app",
    github: "https://github.com/Eunnylans/Admin-dashboard",
  },
  {
    title: "Bconnected Platform",
    subtitle: "<Team Project>",
    techName:
      "MongoDb | Express | React | NodeJs | CSS | Bootstrap | Figma |  Heroku | Netlify",
    src: project3,
    alt: "Business Platform",
    livedemo: "https://b-connected.netlify.app/",
    github: "https://github.com/SawaMohamed/bbconnected",
  },
  {
    title: "Cook-Book",
    subtitle: "<Team Project>",
    techName:
      "HTML | CSS | JavaScript | Bootstrap | Github-Pages | Material UI",
    src: project4,
    alt: "calculator",
    livedemo: "https://eunnylans.github.io/Cook_Book_Group_One/",
    github: "https://github.com/Eunnylans/Cook_Book_Group_One",
  },
];

const Projects = () => {
  const uiCtx = useContext(UIContext);
  const ref = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  const onScroll = () => {
    const topPos = ref.current.offsetTop;
    const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (
      topPos + 250 < window.scrollY + window.innerHeight &&
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

  const projectList = projectArr.map((project) => {
    return (
      <div
        className={`project ${fadeIn ? "fadeIn" : null}`}
        key={project.title}
      >
        <div className="project-img">
          <a href={project.livedemo} target="_blank" rel="noopener noreferrer">
            <img src={project.src} alt={project.alt} />
          </a>
        </div>
        <div className="project-description">
          <div className="project-title-section">
            <h3 className="project-maintitle">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <p className="project-tech">{project.techName}</p>
          <div className="project-link">
            <a
              href={project.livedemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="projects" id="projects">
      <div
        className={`projects-content ${uiCtx.isDark ? "dark" : null}`}
        ref={ref}
      >
        <Fade left>
          <SectionTitle
            className={`projects-title ${fadeIn ? "fadeIn" : null}`}
          >
            PROJECTS
          </SectionTitle>
        </Fade>
        <Fade right>
          <Divider className="divider"></Divider>
        </Fade>
        <div className="projects-list">{projectList}</div>
      </div>
    </div>
  );
};

export default Projects;
