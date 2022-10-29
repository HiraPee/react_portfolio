import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import SchoolIcon from '@mui/icons-material/School';
import myicon from './imgs/ALN.PNG'

import './css/HomePage.css'



export default function AboutCard() {
  return (
    <Card sx={{width:1200,height:1000 }} >
      <CardContent>
        <Typography align='center' sx={{ fontSize: 70 }}>  自己紹介  </Typography>
        <Typography align='center' >  <img src={myicon} alt="ALN" id="homeicon" />  </Typography>
        <Typography align='center' sx={{fontSize: 50  }} >  名前 : 堀内 優太   </Typography>
        <Typography align='center' sx={{fontSize: 50  }} >  Name : Horiuchi Yuta  </Typography>
        <Typography align='center' sx={{fontSize: 50  }} > 誕生日:01/19  </Typography>
        <Typography align='center' sx={{fontSize: 50  }} >  <SchoolIcon></SchoolIcon> 出身大学 : 近畿大学理工学部情報学科 卒業  </Typography>
        <Typography align='center' sx={{fontSize: 50  }} >  <SchoolIcon></SchoolIcon> 特徴1 : とりあえずコツコツ努力型  </Typography>
        <Typography align='center' sx={{fontSize: 50  }} >  <SchoolIcon></SchoolIcon> 特徴2 : 探究心,とりあえずやってみる  </Typography>
      </CardContent>
    </Card>
  );
}
