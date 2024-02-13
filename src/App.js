import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import "./assets/font/stylesheet.css";
import HeaderMenu from "./components/Header/HeaderMenu";
import withStyles from "react-jss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Quotes from "./sections/projects/Quotes";
import Footer from "./components/Footer";

const styles = {
  app: { height: "100%", backgroundColor: "black" },
  header: {
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 100,
    mixBlendMode: "difference",
  },
  footer: {
    width: "100%",
    position: "fixed",
    zIndex: 100,
    mixBlendMode: "difference !important",
    bottom: 0,
    // opacity: 0.6,
    fontSize: "10px",
    textAlign: "center",
  },
};

const App = ({ classes }) => {
  return (
    // <Router basename={process.env.PUBLIC_URL}>
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
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
    // </Router>
  );
};

export default withStyles(styles)(App);
