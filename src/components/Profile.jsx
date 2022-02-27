//Profile.jsx
import { makeStyles } from "@mui/styles";
import Link from '@mui/material/Link';
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
    paddingBottom: "50px"
  },
  img: {
    height: "150px",
    borderRadius: "50%",
    margin: "auto 50px",
  },
  text: {
    textAlign: "left",
  },
  link: {
    display: "flex",
  },
  linkText: {
    marginRight: "5px",
  },
  comment: {
    paddingBottom: "100px"
  }
});


const Profile = () => {

  const classes = useStyles();

  return (
    <div className={classes.profile} id="profileLink">
        <h1 className={classes.title}>PROFILE</h1>
        <div className={classes.contents}>
          <img className={classes.img} src={img} alt="icon"/>
            <p className={classes.text}>
              name:tattu-<br/>
              age:24<br/>
              address:Aomori<br/>
              hobby:game<br/>
              <div className={classes.link}>
                <Link href="https://github.com/li40b" color="inherit" className={classes.linkText}>GitHub</Link><br/>
                <Link href="https://qiita.com/li40b" color="inherit" className={classes.linkText}>Qiita</Link><br/>
              </div>
            </p>
        </div>
        <div className={classes.comment}>
          <p>
            私のプロフィールサイトを見ていただきありがとうございます。<br />
            現在はフロントエンドの領域を実務をこなしながら勉強中です。<br />
            将来はバックエンドの領域で仕事ができるように日々勉強中。
          </p>
        </div>
    </div> 
  );
};

export default Profile;