import React from "react";
import withStyles from "react-jss";
import headshot from "../assets/photos/lily.png";
import * as logos from "../assets/logos";

const styles = {
  pageContainer: {
    height: "100%",
    position: "relative",
    backgroundColor: "#ffdcd4",
  },
  headshot: {
    position: "fixed",
    right: 0,
    bottom: 0,
    maxWidth: "60%",
    maxHeight: "80%",
  },
  textBox: {
    position: "relative",
    padding: "27% 30% 20px 10%",
    fontFamily: "Gatwick",
    fontWeight: "bold",
    fontSize: "36px",
    "@media only screen and (max-width: 992px)": {
      fontSize: "24px",
    },
    transition: "font-size 1.5s",
    color: "black",
    lineHeight: "1.2",
    zIndex: 1,
  },
  textBox2: {
    composes: "$textBox",
    padding: "5% 40% 150px 10%",
    fontSize: "18px",
    lineHeight: 1.2,
    fontWeight: 600,
  },
  logos: {
    maxWidth: "250px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 0px 20px 10%",
    position: "relative",
    zIndex: 1,
  },
  logoIcon: {
    width: "40px",
    height: "40px",
    "&:hover": {
      mixBlendMode: "overlay",
      opacity: 0.5,
    },
  },
};

const AboutPage = ({ classes }) => {
  return (
    <>
      <div className={classes.pageContainer}>
        <img
          src={headshot}
          alt={"headshot of lily with pink overtone"}
          className={classes.headshot}
        />
        <div className={classes.textBox}>
          Hi! I'm a designer, a front-end developer, and a lettering artist
          based in Brooklyn, NY.
        </div>

        <div className={classes.textBox2}>
          I've always been drawn to the space where art and science collide. I
          bring them together using data visualization design, front end
          development, and UI/UX design.{" "}
        </div>
        <div className={classes.logos}>
          <a
            href="https://dribbble.com/lilyelle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.logoIcon}
              src={logos.dribbble}
              alt={"link to dribbble"}
            />
          </a>
          <a
            href="https://instagram.com/lilyelle.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.logoIcon}
              src={logos.insta}
              alt={"link to instagram"}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/lilyboyce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.logoIcon}
              src={logos.linkedin}
              alt={"link to linkedin"}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(AboutPage);
