import React, { useState } from "react";
import withStyles from "react-jss";
import dice from "../../assets/dice.svg";

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
  button: {
    position: "absolute",
    bottom: "20%",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
};

const Quotes = ({ classes }) => {
  const quotes = [
    {
      quote:
        "Stop interrupting what people are interested in, and instead BE what people are interested in.",
      speaker: "Graham McDonnell",
      title: "How to Make Terrible Branded Content",
    },
    {
      quote:
        "The design process is chaotic by nature. You can let chaos fuel your creativity.",
      speaker: "Lu Yu",
      title: "Embrace the Chaos",
    },
    {
      quote:
        "Everything is a remix, but if you want to remix, make a bloody effort!",
      speaker: "Freddie / Erik of SNASK",
      title: "Breaking Walls of Conservatism",
    },

    {
      quote:
        "If you rely on trends in your designs, you won't make anything that lasts.",
      speaker: "Pelle Martin",
      title: "The Eye of the Beholder",
    },
    {
      quote: "The future is change rippling through a system.",
      speaker: "Alicia Shao",
      title: "Designing For the Unknown",
    },
    {
      quote: "Creativity = (Knowledge * (Taste + Skills))",
      speaker: "Niccolo Miranda",
      title: "The Cursor of AI",
    },
    {
      quote: "Look at what everyone is doing, and do the opposite.",
      speaker: "Lu Yu",
      title: "Embrace the Chaos",
    },
    {
      quote:
        "The essence of strategy is imagination, and transforms design into a storytelling tool.",
      speaker: "Aneta Junkova / Michelle Lee",
      title: "From Fantasy to Relevance",
    },

    {
      quote: "The problem comes when change happens and you don't.",
      speaker: "Freddie / Erik of SNASK",
      title: "Breaking Walls of Conservatism",
    },
  ];

  // display a new quote on click, cycle through based on array length

  const len = quotes.length;
  const [displayQuote, setDisplayQuote] = useState(0);
  const getQuote = () => {
    if (displayQuote < len - 1) {
      setDisplayQuote((a) => a + 1);
    } else if (displayQuote >= len - 1) {
      setDisplayQuote(0);
    }
  };

  //to do: adjust DICE SVG file and incorporate gsap for a hover animation
  return (
    <div className={classes.container}>
      <p className={classes.quote}>"{quotes[displayQuote].quote}"</p>
      <p className={classes.speaker}>{quotes[displayQuote].speaker}</p>
      <p className={classes.title}>{quotes[displayQuote].text}</p>
      <button className={classes.button} onClick={getQuote}>
        <img src={dice} />
      </button>
    </div>
  );
};

export default withStyles(styles)(Quotes);
