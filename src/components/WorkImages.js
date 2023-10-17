import React from "react";
import withStyles from "react-jss";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as images from "../assets/project-images";
// import BrowserImage from "../assets/BrowserImage";

const styles = {
  image: {
    minWidth: "30%",
    maxWidth: "50%",
    transition: "width 1s",
  },
};

const WorkImages = ({ classes }) => {
  return (
    <>
      <div className={classes.container}>
        {/* <BrowserImage /> */}
        <img className={classes.image} src={images.browser1} />
        <img className={classes.image} src={images.browser1} />
      </div>
    </>
  );
};

export default withStyles(styles)(WorkImages);
