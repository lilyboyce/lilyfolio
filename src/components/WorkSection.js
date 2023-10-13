import React from "react";
import withStyles from "react-jss";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as images from "../assets/project-images";

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexWrap: "none",
    marginBottom: "200px",
    zIndex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  imgContainer: {
    // css mask boundary for image?
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "contain",
    transition: "scale 0.5s",
    "&:hover": {
      scale: 1.3,
    },
  },
  pulse: {
    width: "50%",
    margin: "0 auto",
  },
  circleBG: {
    height: "500px",
    width: "500px",
    position: "absolute",
    top: 10,
    zIndex: 0,
    right: "-150px",
    borderRadius: "50%",
    background: "#ffd66f",
    transition: "height .5s, width .5s, top .5s, right .5s",
    "&:hover": {
      top: 10,
      right: -200,
      height: "600px",
      width: "600px",
    },
  },
};

const WorkSection = ({ classes }) => {
  const thumbnails = [
    {
      img: images.pplsList,
    },
    { img: images.chineseRecipes },
    { img: images.p4kCloseup },
  ];

  return (
    <>
      <div className={classes.container}>
        {thumbnails.map((item) => {
          return (
            <div className={classes.imgContainer}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  className={classes.image}
                  src={item.img}
                  alt={`Thumbnail of ${item.title}`}
                />
                <p>{item.title}</p>
              </a>
            </div>
          );
        })}
      </div>
      {/* switch from image to coded line & pulse dot */}
      <img
        className={classes.pulse}
        src={images.pulse}
        alt={"gradient divider line in a pulse chart style"}
      />
    </>
  );
};

export default withStyles(styles)(WorkSection);
