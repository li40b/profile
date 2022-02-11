//Work.jsx
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  profile: {
    color: "#ffff",
    backgroundColor: "gray",
    textAlign: "center",
    paddingTop: "300px",
    paddingBottom: "300px",
  },
});

const Work = () => {

  const classes = useStyles();

  return(
    <div className={classes.profile} id="workLink">
      <h1>Work</h1>
      <p>※準備中</p>
    </div>
  );
}

export default Work;