import { Card, Grid, Icon, Typography } from "@material-ui/core";
import classNames from "classnames";
import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import UIContext from "../context/ui-context";

const Techskills = ({ match }) => {
  const myTechStack = [
    {
      id: 1,
      category: "Front-End Development",
      icon: "fas fa-desktop",
      languages_practices: "Languages:",
      language_PracticeList: "HTML, CSS, Sass, JavaScript, ReactJS",
      tools: "Tech Tools",
      tooList:
        "GitHUB, Material UI, Particles.js, Bootstrap, React Spring, Figma, Netlify",
    },
    {
      id: 2,
      category: "Back-End Development",
      icon: "fas fa-database",
      languages_practices: "Languages",
      language_PracticeList: "NodeJs, NoSQL, SQL",
      tools: "Tech Tools",
      tooList: "Express, MongoDB, PostgreSQL, GitHUB, Heroku",
    },
    {
      id: 3,
      category: "Project Management",
      icon: "fas fa-sitemap",
      languages_practices: "Practices:",
      language_PracticeList: "Agile, SCRUM",
      tools: "Tools Used:",
      tooList: "Trello, Slack, Discord",
    },
  ];

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

  return (
    <div className={`techskills ${fadeIn ? "fadeIn" : null}`}>
      <Grid container spacing={4} className={`techStackContainer ${uiCtx.isDark ? "dark" : null}`} >
        {myTechStack &&
          myTechStack.map((tech) => {
            return (
              <div>
                <Grid item className="techStackContainer">
                  <Card elevation={0} className="card">
                    <div className="iconsDiv">
                      <Icon className={classNames(`${tech.icon}`)} id="icons"/>
                      <div className="divider"></div>
                    </div>
                    <Typography variant="h5" className="cardTypo">
                      {tech.category}
                    </Typography>
                    <Typography variant="body2" align="center">
                      <span className="typoSpan">
                        {tech.languages_practices}
                      </span>
                      <br />
                      {tech.language_PracticeList}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ padding: "15px 25px", margin: "auto" }}
                    >
                      <span className="typoSpan">{tech.tools}</span>
                      <br />
                      {tech.tooList}
                    </Typography>
                  </Card>
                </Grid>
              </div>
            );
          })}
      </Grid>
    </div>
  );
};

export default Techskills;
