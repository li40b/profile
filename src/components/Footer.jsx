import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    color: "#ebf6f7",
    backgroundColor: "#212121",
    width: "100%",
    position: "absolute",
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>tattu-@li40b.com</div>
  );
};

export default Footer;