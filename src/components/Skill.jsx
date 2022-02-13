//Skill.jsx

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import htmlImg from "../img/html-5.svg";
import cssImg from "../img/css-3.svg";
import vueImg from "../img/vue.svg";
import reactImg from "../img/react.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Title: {
    color: "#ebf6f7",
    backgroundColor: "#212121",
    width: "100%",
    position: "absolute",
    textAlign: "center",
    paddingTop: "100px",

  },
  Contents: {
    backgroundColor: "#212121",
    paddingTop: "200px",
  },
});

const skillItems = [
  { 
    id: 1,
    name: 'HTML', 
    text: '', 
    img: htmlImg,
    value : "4"
  },
  { 
    id: 2,
    name: 'CSS', 
    text: '', 
    img: cssImg,
    value : "3" 
  },
  {
    id: 3,
    name: 'Vue', 
    text: '', 
    img: vueImg,
    value : "3"
  },
  {
    id: 4,
    name: 'React', 
    text: '' , 
    img: reactImg,
    value : "2" 
  }
]

console.log(skillItems);

const Skill = () => {

  const classes = useStyles();

  return (
    <div id="skillLink">
      <div>
        <h1 className={classes.Title}>Skill</h1>
      </div>
      <div className={classes.Contents}>
        <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              p: 0,
              m: 0,
              bgcolor: 'background.paper',
              borderRadius: 0,
              backgroundColor: '#212121',
            }}
          >
        {skillItems.map((skillItem) => (
          <Card 
              sx={{ 
                maxWidth: 300,
                maxHeight: 350,
                p: 2,
                m: 5
              }}
              key={skillItem.id}
              >
              <CardMedia
              component="img"
              height="140"
              image={ skillItem.img }
              alt={skillItem.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {skillItem.name}
                </Typography>
                <Rating name="read-only" value={skillItem.value} readOnly />
                <Typography variant="body2" color="text.secondary">
                {skillItem.text}
                </Typography>
              </CardContent>
          </Card>
        ))}
        </Box>
      </div>
    </div>
  );
}

export default Skill;