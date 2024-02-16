import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import AddMeeting from '../meeting/AddMeeting';


function ServiceCard({ service }) {

  return (
    <>
      <Card sx={{ maxWidth: 340 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={service.img}
            alt={service.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {service.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {service.describtion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <AddMeeting service={service.name} />
      <br></br>
    </>
  );
}
export default ServiceCard;
