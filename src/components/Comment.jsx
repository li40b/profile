import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    color: "#000000",
    backgroundColor: "#ffff",
    textAlign: "center",
    marginTop: "300px",
    marginBottom: "300px",
  },
});

const Comment = () => {

  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <h1>tattu-'s profile</h1>
      <p></p>
    </div>
  )
};

export default Comment;