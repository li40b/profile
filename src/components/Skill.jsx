//Skill.jsx

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
  },
  Contents: {
    backgroundColor: "#212121",
  },
  box: {

  }
});

const Skill = () => {

  const classes = useStyles();

  return (
    <div>
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
          {/* html */}
          <Card 
              sx={{ 
                maxWidth: 300,
                maxHeight: 300,
                p: 2,
                m: 5
              }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ htmlImg }
                alt="HTML"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* CSS */}
          <Card 
              sx={{ 
                maxWidth: 300,
                maxHeight: 300,
                p: 2,
                m: 5
              }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ cssImg }
                alt="HTML"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* vue */}
          <Card 
              sx={{ 
                maxWidth: 300,
                maxHeight: 300,
                p: 2,
                m: 5
              }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ vueImg }
                alt="HTML"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* react */}
          <Card 
              sx={{ 
                maxWidth: 300,
                maxHeight: 300,
                p: 2,
                m: 5
              }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ reactImg }
                alt="HTML"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default Skill;