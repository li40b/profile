import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  comment: {
    color: "#000000",
    backgroundColor: "#ffff",
    textAlign: "center",
  },
  title: {
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  text: {
    paddingBottom: "200px",
  }
});

const Comment = () => {

  const classes = useStyles();

  return (
    <div className={classes.comment}>
      <h1 className={classes.title}>Comment</h1>
      <p className={classes.text}>私の自己紹介サイトを見ていただきありがとうございます。</p>
    </div>
  )
};

export default Comment;