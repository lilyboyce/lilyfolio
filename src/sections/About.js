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
    maxWidth: "50%",
    maxHeight: "80%",
  },
  textBox: {
    position: "relative",
    padding: "27% 20% 20px 10%",
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
    fontFamily: "FreightDisp Pro",
    fontWeight: 300,
    padding: "5% 58% 150px 10%",
    fontSize: "24px",
    lineHeight: 1.5,
    textWrap: "balance",
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
          I’m a designer, developer, and artist based in Brooklyn, New York.
        </div>

        <div className={classes.textBox2}>
          <p>
            Lily is a digital designer with a love for data visualization,
            smooth user interactions, and illustration. She was most recently a
            Senior Interactive Designer & Developer on Condé Nast’s Data Story
            Lab, a cross-brand team that creates interactive digital experiences
            for the publisher’s many magazines, including Vogue, Pitchfork,
            Condé Nast Traveler, Architectural Digest, GQ, WIRED, and
            Epicurious. She lives in Brooklyn, New York.
          </p>{" "}
          <p>
            {" "}
            Lily has always been drawn to the space where art and science
            collide – as a kid she couldn’t decide whether to be an astronaut or
            an artist. In any given week Lily is probably playing tennis,
            illustrating letters, dreaming up big travel plans, or taking an
            excessive amount of photos to stash in folders rarely to be seen
            again.
          </p>
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
