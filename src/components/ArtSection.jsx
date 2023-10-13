import React from "react";
import withStyles from "react-jss";
import * as images from "../assets/lettering";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "10% 0",
  },
  imageRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "none",
  },
  imgContainer: {
    width: "33%",
  },
  image: {
    width: "100%",
    objectFit: "cover",
  },
  matches: {
    width: "100%",
  },
};

const ArtSection = ({ classes }) => {
  const thumbnails = [
    { img: images.angels },
    { img: images.timeenough },
    { img: images.unlearn },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.imageRow}>
        {thumbnails.map((item) => {
          return (
            <div className={classes.imgContainer}>
              <img
                className={classes.image}
                src={item.img}
                alt={`Thumbnail of ${item.title}`}
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <img
        className={classes.matches}
        src={images.matches}
        alt={"36 matchbooks"}
      />
    </div>
  );
};

export default withStyles(styles)(ArtSection);
