import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import myicon from './imgs/ALN.PNG'
import './css/HomePage.css'



export default function HomeCard() {
  return (
    <Card sx={{ maxWidth: 430 ,height: 800 }} >
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
          <br /> 好きな食べ物:焼き鳥,ミルクレープ
          <br /> 好きな言葉: 情けは人のためならず
        </Typography>
      </CardContent>
    </Card>
  );
}
