import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import withStyles from "react-jss";
import Dice from "./Dice.js";
import { bgGradient } from "../../assets/index.js";
import quotes from "./quotesData";
import gsap from "gsap";
// import * as Scrollytelling from "@bsmnt/scrollytelling";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "white",
    height: "100vh",
  },
  quote: {
    fontFamily: "FreightDisp Pro",
    fontWeight: 300,
    fontSize: "32px",
    textAlign: "center",
    maxWidth: "70%",
    textWrap: "balance",
    transition: "opacity 0.5s",
  },
  speaker: {
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  title: {
    fontSize: "12px",
    margin: 0,
  },
  diceContainer: {
    marginTop: "50px",
  },
  text: {
    opacity: 100,
  },
};

const Quotes = ({ classes }) => {
  const colors = [
    { bg: "#5200FF", fg: "#65FFC8" },
    { bg: "#B4DFFF", fg: "#C900CD" },
    { bg: "#000000", fg: "#FFE3B9" },
    { bg: "#FFE3B9", fg: "#5200FF" },
    { bg: "#FFB038", fg: "#A200A6" },
    { bg: "#A7CCAD", fg: "#5200FF" },
  ];

  // display a new quote on click, cycle through based on array length
  // to do: randomize, but no repeats until whole array has been shown
  const len = quotes.length;
  const [displayQuote, setDisplayQuote] = useState(0);
  const [colorPair, setColorPair] = useState(0);
  const [randomRoll, setRandomRoll] = useState(2);
  const getQuote = () => {
    if (displayQuote < len - 1) {
      setDisplayQuote((a) => a + 1);
    } else if (displayQuote >= len - 1) {
      setDisplayQuote(0);
    }
    setRandomRoll(gsap.utils.random(0, 5, 1));
    setColorPair(gsap.utils.random(0, colors.length - 1, 1));
  };

  console.log(randomRoll);

  const el = useRef();
  const textRef = useRef();
  const q = gsap.utils.selector(el);

  // to do: move dice on hover
  const HoverMotion = () => {
    console.log("we're doing something");
  };

  //dynamic gradient bg??

  useEffect(() => {
    //todo: trigger this on hover
    gsap.to(q(".die"), {
      y: (index) => {
        return gsap.utils.random((index + 4) * -7, (index + 4) * 7);
      },
      x: (index) => {
        return gsap.utils.random((index + 3) * -7, (index + 4) * 7);
      },
      rotate: (index) => {
        return gsap.utils.random((index + 5) * -20, (index + 5) * 12);
      },
      ease: "inout",
    });
  }, [q]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here
      gsap.to("#text", {
        color: () => {
          return colors[colorPair].fg;
        },
      });
      gsap.to("#container", {
        background: () => {
          return colors[colorPair].bg;
        },
        duration: 2,
      });
      gsap.to("#diceRect", {
        fill: () => {
          return colors[colorPair].fg;
        },
        stroke: () => {
          return colors[colorPair].bg;
        },
      });
      gsap.to(".diceCirc", {
        fill: () => {
          return colors[colorPair].bg;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [q]);

  return (
    <div ref={el}>
      <div className={classes.container} id="container">
        <p className={`${classes.quote} ${classes.text}`} id="text">
          "{quotes[displayQuote].quote}"
        </p>
        <p className={`${classes.speaker} ${classes.text}`} id="text">
          {quotes[displayQuote].speaker}
        </p>
        <p className={`${classes.title} ${classes.text}`} id="text">
          {quotes[displayQuote].title}
        </p>
        <div onMouseEnter={HoverMotion} className={classes.diceContainer}>
          <Dice getQuote={getQuote} randomRoll={randomRoll} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Quotes);
