import React from "react";
import withStyles from "react-jss";
import { Link } from "react-router-dom";
import * as images from "../assets/project-images";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#262626",
    height: "100%",
  },
  imgContainer: {
    width: "80%",
    margin: "10%",
  },
  image: { width: "100%" },
};

const Work = ({ classes }) => {
  //change data to json imported by sheets
  const thumbnails = [
    {
      img: images.pplsList,
      url: "https://pitchfork.com/features/lists-and-guides/peoples-list-25th-anniversary/",
      title: "Pitchfork Peoples' List: 25th Anniversary",
    },
    { img: images.chineseRecipes },
    { img: images.p4kCloseup },
  ];

  return (
    <div className={classes.container}>
      <h1>Condé Nast</h1>
      <div className={classes.imageGrid}>
        {thumbnails.map((item) => {
          return (
            <div className={classes.imgContainer}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  className={classes.image}
                  src={item.img}
                  alt={`Thumbnail of ${item.title}`}
                />
                <p>{item.title}</p>
              </a>
            </div>
          );
        })}
      </div>
      <h1>Personal, Fun, Etc.</h1>
      <div className={classes.imgContainer}>
        <Link to="/quotes">
          <img className={classes.image} src={images.quotes} />
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Work);
