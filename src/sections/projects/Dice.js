import React from "react";

const Dice = ({ getQuote }) => {
  return (
    <svg
      width="54"
      height="43"
      viewBox="0 0 54 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <g className="die" onClick={getQuote}>
        <rect
          x="0.5"
          y="14.5"
          width="28"
          height="28"
          rx="3.5"
          fill="black"
          stroke="white"
          className="diceRect"
          id="diceRect"
        />
        <circle className="diceCirc" cx="14.5" cy="28.5" r="2.5" fill="white" />
        <circle className="diceCirc" cx="8.5" cy="34.5" r="2.5" fill="white" />
        <circle className="diceCirc" cx="20.5" cy="22.5" r="2.5" fill="white" />
      </g>
      <g className="die" onClick={getQuote}>
        <rect
          x="30.5402"
          y="-0.684685"
          width="28"
          height="28"
          rx="3.5"
          transform="rotate(30.5327 30.5402 -0.684685)"
          fill="black"
          stroke="white"
          className="diceRect"
          id="diceRect"
        />
        <circle className="diceCirc" cx="27.5" cy="20.5" r="2.5" fill="white" />
        <circle className="diceCirc" cx="37.5" cy="26.5" r="2.5" fill="white" />
        <circle className="diceCirc" cx="43.5" cy="16.5" r="2.5" fill="white" />
        <circle className="diceCirc" cx="33.5" cy="10.5" r="2.5" fill="white" />
      </g>
    </svg>
  );
};

export default Dice;
