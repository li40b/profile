import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    color: "#ebf6f7",
    backgroundColor: "#212121",
    width: "100%",
    position: "absolute",
    textAlign: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>Thank you for coming!</div>
  );
};

export default Footer;