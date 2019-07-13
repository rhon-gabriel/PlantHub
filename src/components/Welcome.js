import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import leaf from "../assets/images/leaf.png";

const useStyles = makeStyles(theme => ({
  mainDiv: {
    position: "fixed",
    top: "50%",
    left: "50%"
  }
}));
export default function Welcome() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <a href="/plants">
        <h2 className="enterButton">Enter</h2>
      </a>
      <img src={leaf} alt="" />
    </div>
  );
}
