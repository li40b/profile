//Skill.jsx
//

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SomeImg from "../img/html-5.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  skillTitle: {
    color: "#ebf6f7",
    backgroundColor: "#212121",
    width: "100%",
    position: "absolute",
    textAlign: "center",
  },
  SkillContents: {
    height: "1000px",
    backgroundColor: "#212121",
  },
});

const Skill = () => {

  const classes = useStyles();

  return (
    <div className={classes.SkillContents}>
      <h1 className={classes.skillTitle}>Skill</h1>
      <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            p: 10,
            m: 0,
            bgcolor: 'background.paper',
            borderRadius: 0,
            backgroundColor: '#212121',
          }}
        >
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
              image={ SomeImg }
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
              image={ SomeImg }
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
              image={ SomeImg }
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
              image={ SomeImg }
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
  );
}

export default Skill;