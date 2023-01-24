import { Card, Divider, Grid, Icon, Typography } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import Database from "../assets/databaseIcon.png";
import Desktop from "../assets/desktopIcon.png";
import SiteMap from "../assets/SiteMapIcon.png";
import UIContext from "../context/ui-context";
import SectionTitle from "../UIcomponents/SectionTitle";

const Techskills = ({ match }) => {
  const myTechStack = [
    {
      id: 1,
      category: "Front-End Development",
      icon: <img src={Desktop} alt="Desktop" />,
      languages_practices: "Languages:",
      language_PracticeList: "HTML, CSS, JavaScript, ReactJS",
      tools: "Tech Tools",
      tooList: "GitHUB, Material UI, Bootstrap, Figma, Netlify",
    },
    {
      id: 2,
      category: "Back-End Development",
      icon: <img src={Database} alt="Database" />,
      languages_practices: "Languages",
      language_PracticeList: "NodeJs, NoSQL, SQL",
      tools: "Tech Tools",
      tooList: "Express, MongoDB, PostgresSQL, GitHUB, Heroku",
    },
    {
      id: 3,
      category: "Project Management",
      icon: <img src={SiteMap} alt="Site" />,
      languages_practices: "Practices:",
      language_PracticeList: "Agile, SCRUM",
      tools: "Tools Used:",
      tooList: "Trello, Slack, Discord, Jira, Miro, Confluence",
    },
  ];

  const uiCtx = useContext(UIContext);
  const ref = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  return (
    <div className={`techskills ${uiCtx.isDark ? "dark" : null}`} ref={ref}>
      <div
        className={`techskills-content ${uiCtx.isDark ? "dark" : null}`}
        ref={ref}
      >
        <Fade left>
          <SectionTitle
            className={`techskills-title ${fadeIn ? "fadeIn" : null}`}
            style={{
              margin: "10px 0 40px 46.5% ",
            }}
          >
            Skills
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
              margin: "10px 0 40px 46.5% ",
            }}
          ></Divider>
        </Fade>
      </div>

      <Grid
        container
        spacing={1}
        className={`techStackContainer ${fadeIn ? "fadeIn" : null}`}
      >
        {myTechStack &&
          myTechStack.map((tech) => {
            return (
              <div key={tech.id}>
                <Grid item className="techStackContainer">
                  <Card elevation={0} className="card">
                    <div className="iconsDiv">
                      <Icon id="icons">{tech.icon}</Icon>
                      <div className="divider"></div>
                    </div>
                    <Typography className="cardTypo">
                      {tech.category}
                    </Typography>
                    <Typography variant="body2" align="center">
                      <span className="typoSpan">
                        {tech.languages_practices}
                      </span>
                      <br />
                      <span className="typoSpanList">
                        {tech.language_PracticeList}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ padding: "15px 25px", margin: "auto" }}
                    >
                      <span className="typoSpan">{tech.tools}</span>
                      <br />
                      <span className="typoSpanList">{tech.tooList}</span>
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
