import React, { useRef, useEffect } from "react";
import withStyles from "react-jss";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
// import * as images from "../assets/project-images";
import * as browsers from "../assets/browser-windows";
import BGShape from "../sections/projects/BGShape";
// import { Link } from "react-router-dom";

const styles = {
  container: {
    position: "relative",
    margin: "0 auto",
    width: "100%",
    height: "400px",
    margin: "0 auto 30vh auto",
  },
  browserWindow: {
    position: "absolute",
    minWidth: "30%",
    maxWidth: "40%",
    transition: "width 1s",
    marginLeft: "10%",
    zIndex: 1,
    "&:hover": {
      zIndex: 99,
    },
  },
  image: {
    width: "100%",
  },
  dragText: {
    color: "#5d5d5d",
    fontSize: "9px",
    fontFamily: "Gatwick",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0 auto",
    // background: "white",
    // width: "100px",
    // height: "100px",
    // borderRadius: 50,
    position: "absolute",
    left: "10%",
    top: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

const WorkImages = ({ classes }) => {
  const el = useRef();
  // const q = gsap.utils.selector(el);
  gsap.registerPlugin(Draggable);

  useEffect(() => {
    Draggable.create("#browserWindow", {
      type: "x,y",
    });
  }, []);

  //to do: add matchMedia for mobile view
  // to do: do math to make sure the x positions have the entire group centered based on browser width
  useEffect(() => {
    gsap.set("#browserWindow", {
      opacity: 0,
      x: (index) => {
        return (index + 1) * 50;
      },
      y: (index) => {
        return index * 30;
      },
    });
    gsap.to("#browserWindow", {
      opacity: 1,
      duration: 0.1,
      stagger: 0.5,
      immediateRender: false, // otherwise scrollTrigger will force the render right away and the starting values that get locked in would be affected by the from() above
      yoyo: true,
      scrollTrigger: {
        trigger: "#container",
        start: "-500px",
        end: "-200px",
        markers: false,
        scrub: true,
      },
    });
  }, []);

  //dynamically insert the image into the browser frame in order to use gifs
  const windows = [
    { id: 1, src: browsers.browser1 },
    { id: 2, src: browsers.browser2 },
    { id: 3, src: browsers.browser3 },
    { id: 4, src: browsers.browser4 },
    { id: 5, src: browsers.browser5 },
    { id: 6, src: browsers.browser6 },
    { id: 7, src: browsers.browser7 },
    { id: 8, src: browsers.browser8 },
  ];

  return (
    <>
      <div className={classes.container} ref={el} id="container">
        {windows.map((img) => {
          return (
            <>
              <div
                id="browserWindow"
                className={classes.browserWindow}
                // ref={el}
              >
                <img
                  id="image"
                  className={classes.image}
                  src={img.src}
                  alt={
                    "a minimal browser window that shows a screenshot of selected projects. the browser windows stack on each other as you scroll down the page, and are draggable."
                  }
                />
              </div>
            </>
          );
        })}
        <div className={classes.dragText}>
          {/* <BGShape color="#FF63CA" radius="100" /> */}
          <span>DRAG THE </span>
          <span>WINDOWS :)</span>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(WorkImages);
