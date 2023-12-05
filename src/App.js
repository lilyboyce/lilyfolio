import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import "./assets/font/stylesheet.css";
import HeaderMenu from "./components/Header/HeaderMenu";
import withStyles from "react-jss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quotes from "./sections/projects/Quotes";

const styles = {
  app: { height: "100%", backgroundColor: "black" },
  header: {
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 100,
    mixBlendMode: "difference",
  },
};

const App = ({ classes }) => {
  return (
    <Router>
      <div className={classes.app}>
        <div className={classes.header}>
          <HeaderMenu />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default withStyles(styles)(App);
