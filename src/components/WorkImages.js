import React, { useRef, useEffect } from "react";
import withStyles from "react-jss";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import * as images from "../assets/project-images";
// import { Link } from "react-router-dom";

const styles = {
  container: {
    position: "relative",
    margin: "0 auto",
    width: "100%",
    height: "400px",
  },
  browserWindow1: {
    position: "absolute",
    minWidth: "30%",
    maxWidth: "40%",
    transition: "width 1s",
    marginLeft: "10%",
    "&:hover": {
      zIndex: 99,
    },
  },
  image: {
    width: "100%",
  },
};

const WorkImages = ({ classes }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(Draggable);

  useEffect(() => {
    Draggable.create("#browserWindow", {
      type: "x,y",
    });
  }, [q]);

  //to do: add matchMedia for mobile view
  useEffect(() => {
    gsap.fromTo(
      "#browserWindow",
      {
        opacity: 0,
        x: (index) => {
          return (index + 1) * 50;
        },
        y: (index) => {
          return index * 30;
        },
      },
      {
        opacity: 1,
        duration: 0.1,
        stagger: 0.3,
        x: (index) => {
          return (index + 1) * 50;
        },
        y: (index) => {
          return index * 30;
        },
      }
    );
  }, []);

  //todo: get better project images :| they're blurry!
  //dynamically insert the image into the browser frame in order to use gifs
  const windows = [
    { id: 1, src: images.browser1 },
    { id: 2, src: images.browser2 },
    { id: 3, src: images.browser3 },
    { id: 4, src: images.browser4 },
    { id: 5, src: images.browser5 },
    { id: 6, src: images.browser6 },
    { id: 7, src: images.browser7 },
  ];

  return (
    <>
      <div className={classes.container} ref={el}>
        {/* <BrowserImage /> */}
        {windows.map((img) => {
          // console.log(`browserWindow${[img.id]}`);
          return (
            <>
              <div
                id="browserWindow"
                className={classes.browserWindow1}
                // ref={el}
              >
                {/* <Link to="/work"> */}
                <img
                  id="image"
                  className={classes.image}
                  src={img.src}
                  alt={
                    "a modern minimal browser window that shows a screenshot of selected projects. they stack on each other loading down the page, and are draggable."
                  }
                />
                {/* </Link> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default withStyles(styles)(WorkImages);
