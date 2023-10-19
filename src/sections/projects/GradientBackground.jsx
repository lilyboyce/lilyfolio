import React, { useState, useEffect } from "react";
import gsap from "gsap";

function GradientBackground() {
  const [background, setBackground] = useState(generateRandomGradient());

  useEffect(() => {
    // Add event listener on mount
    document.body.addEventListener("click", handleBackgroundChange);

    // Clean up event listener on unmount
    return () => {
      document.body.removeEventListener("click", handleBackgroundChange);
    };
  }, []);

  function generateRandomGradient() {
    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }
    return `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`;
  }

  function handleBackgroundChange() {
    const newGradient = generateRandomGradient();
    gsap.to(document.body, {
      background: newGradient,
      duration: 1,
      onStart: function () {
        setBackground(newGradient);
      },
    });
  }

  return (
    <div style={{ height: "100vh", background: background }}>
      {/* Your content here */}
    </div>
  );
}

export default GradientBackground;
