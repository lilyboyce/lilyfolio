import React, { useEffect, useRef } from "react";
import withStyles from "react-jss";
import * as logos from "../assets/logos";
import WorkSection from "../components/WorkSection";
import ArtSection from "../components/ArtSection";
import HeaderLogo from "../components/Header/HeaderLogo";
import colors from "../styles/colors";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkImages from "../components/WorkImages";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space between",
    backgroundColor: "black",
  },
  wordmark: {
    position: "sticky",
    top: -70,
    padding: "100px 0 0 10%",
  },
  textBox: {
    position: "relative",
    margin: "380px 10% 130px 10%",
    fontFamily: "sans-serif",
    fontSize: "24px",
    textWrap: "balance",
    "@media only screen and (max-width: 800px)": {
      fontSize: "24px",
    },
    transition: "font-size 1.5s",
    color: colors.offwhite,
    lineHeight: "1.5",
    zIndex: 1,
  },
  text: {
    color: colors.offwhite,
    lineHeight: 1.5,
    // opacity: 0.5,
    textAlign: "center",
  },
  logos: {
    maxWidth: "250px",
    maxHeight: "20px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 0 10% 10%",
  },
  logoIcon: {
    width: "40px",
    color: "red",
    height: "40px",
    "&:hover": {
      color: "#FF6B6B",
    },
  },
};

const Home = ({ classes }) => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef();
  const q = gsap.utils.selector(el);

  //to do - create timeline for full page
  useEffect(() => {
    // header letters
    gsap.to(q(".letter"), {
      y: (index, element) => {
        var box = element.getBBox();
        return 100 - box.y - box.height;
      },
      x: (index) => {
        return index === 1
          ? -75
          : index === 2
          ? -100
          : index === 3
          ? -115
          : index === 8
          ? -215
          : (index + 2) * -20;
      },
      rotate: (index) => {
        return index === 1
          ? -16
          : index === 2
          ? -14
          : index === 3
          ? 16
          : index === 4
          ? -15
          : index === 8
          ? -15
          : 0;
      },
      scale: 0.5,
      yoyo: true,
      scrollTrigger: {
        markers: false,
        trigger: ".container",
        start: "50px",
        end: "+=450",
        scrub: true,
      },
    });
    gsap.to(q(".projectBrowser"), {
      rotate: 15,
      scrollTrigger: {
        trigger: ".projectBrowser",
        scrub: true,
      },
    });
  }, [q]);

  return (
    <div className={classes.container} ref={el}>
      <div className={classes.wordmark}>
        <HeaderLogo />
      </div>

      <div className={classes.textBox}>
        <div className={classes.text}>
          I’m a designer and developer specializing in interactive data-rich
          experiences.
        </div>
      </div>
      <WorkImages />
      <div className={classes.textBox}>
        <div className={classes.text}>
          I also quite enjoy illustrating letters and words.
        </div>
      </div>
      <ArtSection />
      <div className={`${classes.logos} ${classes.hoverLink}`}>
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
          href="https://instagram.com/lilypaperco"
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
  );
};

export default withStyles(styles)(Home);
