import React from "react";
import withStyles from "react-jss";

const styles = {};

const ProjectModule = ({ classes }) => {
  return (
    <div>
      <h1>{projectName}</h1>
    </div>
  );
};

export default withStyles(styles)(ProjectModule);
