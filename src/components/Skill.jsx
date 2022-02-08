import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SomeImg from "../img/html-5.svg";

const Skill = () => {

  return (
    <Box
        sx={{
          display: 'flex',
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
            maxWidth: 350,
            maxHeight: 300,
            p: 2,
            mx: 5
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
  );
}

export default Skill;