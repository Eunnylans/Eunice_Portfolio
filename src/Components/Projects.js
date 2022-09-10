import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import project2 from "../assets/bug-tracker.png";
import project4 from "../assets/calculator.png";
import project1 from "../assets/readyevent.png";
import project3 from "../assets/weather-app.png";
import UIContext from "../context/ui-context";
import SectionTitle from "../UIcomponents/SectionTitle";

const projectArr = [
  {
    title: "readyevent",
    subtitle: "<Team Project>",
    techName: "React | Tailwind CSS | Google API | MUI | npm | Figma | Heroku",
    src: project1,
    alt: "readyevent",
    livedemo: 'https://github.com/Eunnylans',
    github: 'https://github.com/Eunnylans',
  },
  {
    title: "Bug Tracker",
    subtitle: "<Personal Project>",
    techName: "React | Redux | CSS | Firebase | npm | Figma",
    src: project2,
    alt: "bug tracker app",
    livedemo: 'https://github.com/Eunnylans',
    github: 'https://github.com/Eunnylans',
  },
  {
    title: "Weather App",
    subtitle: "<Personal Project>",
    techName:
      "React | CSS | OpenWeatherMap API | npm | Figma | React Testing Library | Netlify",
    src: project3,
    alt: "weather app",
    livedemo: 'https://github.com/Eunnylans',
    github: 'https://github.com/Eunnylans',
  },
  {
    title: "Calculator",
    subtitle: "<Personal Project>",
    techName: "HTML | CSS | Vanilla JavaScript | Jest | GitHub Pages",
    src: project4,
    alt: "calculator",
    livedemo: 'https://github.com/Eunnylans',
    github: 'https://github.com/Eunnylans',
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
        <SectionTitle className={`projects-title ${fadeIn ? "fadeIn" : null}`}>
          Projects
        </SectionTitle>
        <div className="projects-list">{projectList}</div>
      </div>
    </div>
  );
};

export default Projects;
