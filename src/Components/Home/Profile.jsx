import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typical from "react-typical";
import Eunice from "../../../src/Assets/Home/Eunice.jpeg";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    height: "10%",
    minHeight: "fit-content",
  },

  profileParent: {
    display: "flex",
    alignItems: "center",
    color: "aliceblue",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      margin: "40px 0 0 0",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      margin: "40px 0 0 0",
    },
  },

  profileDetails: {
    [theme.breakpoints.up("xs")]: {
      width: "90%",
    },

    [theme.breakpoints.up("md")]: {
      margin: "25px 0 0",
    },
  },

  profileDetailsName: {
    fontSize: "60px",
    fontFamily: "Poppins SemiBold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },

  profileDetailsRole: {
    display: "flex",
    flexDirection: "column",
    margin: "14px 0 24px 0",
    fontSize: "35px",
    fontFamily: "cursive",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },

  h1: {
    fontSize: "35px",
    fontFamily: "cursive",
  },

  primaryText: {
    color: "(--white)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },

  highlightedText: {
    color: "var(--dark-orange)",
  },

  profileRoleTagline: {
    fontSize: "19px",
    margin: "5px 0 0 0",
    fontFamily: "Poppins Light",
  },

  highlightedBtn: {
    margin: "0 0 0 28px",
    fontSize: "50px",
    "&:hover": {
      margin: "0 0 0 28px",
      backgroundColor: "cornsilk",
      color: "#111",
    },
    [theme.breakpoints.down("xs")]: {
      width: "120px",
      padding: "11px 0",
      zIndex: ",",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 !important",
    },
  },

  profileOptions: {
    fontWeight: "bolder",
    margin: "0 0 0 28px",
    "&:hover": {
      margin: "0 0 0 28px",
      // backgroundColor: "cornsilk",
      color: "#111",
    },
    [theme.breakpoints.down("xs")]: {
      width: "120px",
      padding: "11px 0",
      zIndex: "700",
    },

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "space-between",
    },

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      zIndex: "700",
    },

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },

  profilePicture: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 0px 0px var(--white)",
    borderRadius: "50%",
    height: "380px",
    width: "380px",
    margin: "0 0px 0 100px",
    [theme.breakpoints.down("sm")]: {
      width: "320",
      height: "320px",
      margin: "0 0 0 4px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "320",
      height: "320px",
      margin: "0 0 0 4px",
    },

    [theme.breakpoints.up("xs")]: {
      margin: "0 0 0 80px",
    },

    [theme.breakpoints.up("sm")]: {
      margin: "0 0 0 80px",
    },

    [theme.breakpoints.up("md")]: {
      margin: "0 !important",
    },

    [theme.breakpoints.down("xxs")]: {
      height: "275px",
      width: "275px",
      marginTop: "-90px",
    },
  },

  profilePictureBackground: {
    height: "92%",
    width: "92%",
    backgroundImage: `url(${Eunice})`,
    backgroundSize: "cover",
    borderRadius: "50%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    "&:hover": {
      transform: "scale(1.07)",
      transition: "1s ease-out",
    },
  },

  i: {
    color: "white",
    fontWeight: "bolder",
    fontSize: "1000",
    padding: "8px",
    paddingLeft: "0px",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileParent}>
        <div className={classes.profileDetails}>
          <div className={classes.colz}>
            <div className={classes.colzIcon}>
              <a href="https://www.facebook.com/igbinedion.abieyuwa">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/eunice-abieyuwa-igbinedion-82bb88117/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.xing.com/profile/EuniceAbieyuwa_Igbinedion/cv">
                <i className="fa fa-xing"></i>
              </a>
              <a href="https://www.instagram.com/leuchtender_stern18/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/eunnylans">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCzfYTsnAfmb8P8Xda5mDNQQ">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://github.com/Eunnylans">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className={classes.profileDetailsName}>
            <span className={classes.primaryText}>
              {" "}
              Hello, I'M{" "}
              <span className={classes.highlightedText}>
                Eunice Abieyuwa Igbinedion
              </span>
            </span>
          </div>
          <div className={classes.profileDetailsRole}>
            <span className={classes.primaryText}>
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
              <span className={classes.profileRoleTagline}>
                Master of building application with Frontend operations.
              </span>
            </span>
          </div>
          <div className={classes.profileOptions}>
            <button className="btn primary-btn" id={classes.btn}>
              {""}
              Hire Me{" "}
            </button>
            <a href="MyCV.pdf" download="Eunice.A Igbinedion MyCV.pdf">
              <button
                className="btn highlighted-btn"
                id={classes.highlightedBtn}
              >
                Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className={classes.profilePicture}>
          <div className={classes.profilePictureBackground}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
