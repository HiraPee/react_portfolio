import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import myicon from './imgs/ALN.PNG'



export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 360 }} >
      <CardContent>
        <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
          初めまして!!
        </Typography>
        <img src={myicon} alt="ALN" id="homeicon" />
        <Typography sx={{fontSize: 40  }} color="text.secondary">
          Name : 堀内 優太 Horiuchi Yuta
        </Typography>
        <Typography variant="body2">
          近畿大学大学院 修士課程
          <br />
          {'2024年3月修了予定'}
        </Typography>
      </CardContent>
    </Card>
  );
}
