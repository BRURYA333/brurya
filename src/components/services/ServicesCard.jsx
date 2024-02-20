import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import AddMeeting from '../meeting/AddMeeting';
import './ServicesCard.css'


function ServiceCard({ service }) {

  return (
    
      <div className='grid-container' >
        <div className='card'>
       
        <Card sx={{ maxWidth: 220 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={service.image}
              alt={service.image}
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

        <AddMeeting service={service} />
        
        <br></br>
        </div>
    </div >
  );
}
export default ServiceCard;
