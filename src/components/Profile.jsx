//Profile.jsx

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

const Profile = () => {

  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <h1>PROFILE</h1>
      <p>青森県在住webエンジニア。大学では社会福祉を勉強していたがITの分野に興味があり、<br />
        独学でITの勉強を始めました。今はフロントエンドの開発をしながら勉強をしていき、<br />
        いずれはバックエンドの業務をしていきたいと思っています。
      </p>
    </div> 
  );
};

export default Profile;