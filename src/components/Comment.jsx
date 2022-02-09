import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    color: "#000000",
    backgroundColor: "#ffff",
    textAlign: "center",
    paddingTop: "300px",
    paddingBottom: "300px",
  },
});

const Comment = () => {

  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <h1>Comment</h1>
      <p>私の自己紹介サイトを見ていただきありがとうございます。</p>
    </div>
  )
};

export default Comment;