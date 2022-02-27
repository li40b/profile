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
    <div className={classes.comment} id="commentLink">
      <h1 className={classes.title}>Comment</h1>
      <p className={classes.text}>
        最後までご閲覧いだだきありがとうございます。<br />
        私の事をすこしでも知っていただけたら幸いです。<br />
      </p>
    </div>
  )
};

export default Comment;