import React, { useState } from "react";
import withStyles from "react-jss";

const styles = {
  footerText: {
    color: "white",
    // mixBlendMode: "difference !important",
  },
};

const Footer = ({ classes }) => {
  return (
    <div>
      <p className={classes.footerText}>
        Site designed and developed by Lily Boyce
      </p>
    </div>
  );
};

export default withStyles(styles)(Footer);
