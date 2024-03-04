import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import AddMeeting from '../meeting/AddMeeting';
import './ServicesCard.css';

function ServiceCard({ service }) {

  return (

    // <div className="parent-container">
    <div>
      <div>
        <Card sx={{ maxWidth: 220 }} className="card1">

          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={service.image}
              alt={service.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {service.name}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                {service.description}
              </Typography>
              <AddMeeting service={service} />
            </CardContent>

          </CardActionArea>

        </Card>
      </div>
    </div>
  );
}

export default ServiceCard;
