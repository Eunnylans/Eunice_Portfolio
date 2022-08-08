import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    height: "17.8%",
    width: "100%",
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
  },

  footerParent: {
    width: "100%",
    height: "100%",
    maxWidth: "1920px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "flex-end",
    },

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "flex-end",
    },

    [theme.breakpoints.down("lg")]: {
      display: "flex",
      alignItems: "flex-end",
    },

    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "flex-end",
    },
  },

  image: {
    width: "1920px",
    height: "130px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerParent}>
        <img
          src={require("../../Assets/Home/footer.jpg")}
          alt="no internet connection"
          className={classes.image}
        />
      </div>
    </div>
  );
};

export default Footer;
