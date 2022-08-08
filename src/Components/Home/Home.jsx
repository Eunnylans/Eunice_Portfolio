import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Footer from "./Footer";
import Profile from "./Profile";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "670px",
    backgroundColor: "indigo",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <Profile />
      <Footer />
    </div>
  );
};
export default Home;
