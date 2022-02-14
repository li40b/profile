//Profile.jsx
import { makeStyles } from "@mui/styles";
import img from  "../img/IMG_0113.JPG";

const useStyles = makeStyles({
  profile: {
    color: "#ffff",
    backgroundColor: "gray",
    textAlign: "center",
  },
  title: {
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  contents: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "100px"
  },
  img: {
    height: "150px",
    borderRadius: "50%",
    marginRight: "50px"
  },
  text: {
  }
});

const Profile = () => {

  const classes = useStyles();

  return (
    <div className={classes.profile} id="profileLink">
      <h1 className={classes.title}>PROFILE</h1>
      <div className={classes.contents}>
        <img className={classes.img} src={img} alt="icon"/>
          <p>name:tattu-<br/>
             age:24<br/>
             address:Aomori<br/>
             occupation:web engineer<br/>
             <a href="https://github.com/li40b">GitHub</a><br />
             <a href="https://qiita.com/li40b">Qiita</a>
          </p>
      </div>
        <p className={classes.text}>
      </p>
    </div> 
  );
};

export default Profile;