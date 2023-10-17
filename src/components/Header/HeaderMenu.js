import React, { useState } from "react";
import withStyles from "react-jss";
import { Link } from "react-router-dom";

const styles = {
  menuButtons: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "5%",
    fontFamily: "Monument",
    color: "white",
    position: "relative",
  },
  button: {
    margin: "0px 60px 0px 20px",
    textDecoration: "none",
    color: "white",
    // cursor: `img:${cursor}`,
    background: "#262626",
  },
  circle: {
    height: "50px",
    width: "50px",
    position: "absolute",
    top: 75,
    left: -10,
    borderRadius: "50%",
    background: "#F4EDDD",
    transition: "height .5s, width .5s, top .5s, left .5s, opacity .5s",
    "&:hover": {
      top: -400,
      left: -400,
      height: "800px",
      width: "800px",
      // opacity: 0.2,
      backdropFilter: "blur(5px)",
    },
  },
  circleButton: {
    height: "20px",
    width: "20px",
    top: 0,
    left: 0,
    border: "1px solid #F4EDDD",
    cursor: "default",
    // background: "#262626",
    position: "absolute",
    borderRadius: "50%",
    transition: "height .5s, width .5s, top .5s, left .5s",
    "&:hover": {
      opacity: 0.7,
      top: -30,
      left: -30,
      height: "80px",
      width: "80px",
      position: "absolute",
    },
  },
  circleButtonAbout: {
    composes: "$circleButton",
    top: 0,
    left: 100,
    "&:hover": {
      top: -30,
      left: 70,
      height: "80px",
      width: "80px",
      position: "absolute",
    },
  },
  workText: {
    position: "absolute",
    left: -21,
    textAlign: "center",
    width: "auto",
    transition: "opacity 1s, scale .5s",
    color: "#F4EDDD",
    scale: "100%",
  },
  workTextDisplayNone: {
    composes: "$workText",
    opacity: 0,
    scale: 0,
  },
  aboutText: {
    composes: "$workText",
    left: 75,
  },
  aboutTextDisplayNone: {
    composes: "$workText",
    left: 75,
    opacity: 0,
    scale: 0,
  },
  homeText: {
    composes: "$workText",
    fontFamily: "Gatwick",
    fontSize: 36,
    left: 75,
    color: "white",
  },
  homeTextDisplayNone: {
    composes: "$workText",
    fontFamily: "Gatwick",
    left: 75,
    opacity: 0,
    scale: 0,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "85px",
    mixBlendMode: "difference !important",
    transform: "none !important",
    backgroundColor: "transparent",
    color: "#fff",
    position: "relative",
  },
  spacer: {
    width: "200px",
    height: "41px",
  },
};

const HeaderMenu = ({ classes }) => {
  const [showWorkMenu, setShowWorkMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showHomeMenu, setShowHomeMenu] = useState(false);

  return (
    <div className={classes.headerContainer}>
      <Link
        to="/"
        onMouseEnter={() => setShowHomeMenu(true)}
        onMouseLeave={() => setShowHomeMenu(false)}
        onClick={() => setShowHomeMenu(false)}
      >
        <div className={classes.circle}></div>
        <div
          className={
            showHomeMenu ? classes.homeText : classes.homeTextDisplayNone
          }
        >
          home
        </div>
      </Link>
      <div className={classes.spacer} />
      <div className={classes.menuButtons}>
        <Link to="/work" className={classes.button}>
          <div
            className={
              showWorkMenu ? classes.workText : classes.workTextDisplayNone
            }
          >
            work
          </div>
          <div
            className={classes.circleButton}
            onMouseEnter={() => setShowWorkMenu(true)}
            onMouseLeave={() => setShowWorkMenu(false)}
          ></div>
        </Link>
        <Link to="/about" className={classes.button}>
          <div
            className={
              showAboutMenu ? classes.aboutText : classes.aboutTextDisplayNone
            }
          >
            about
          </div>
          <div
            className={classes.circleButtonAbout}
            onMouseEnter={() => setShowAboutMenu(true)}
            onMouseLeave={() => setShowAboutMenu(false)}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(HeaderMenu);
