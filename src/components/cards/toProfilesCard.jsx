import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import skillicon from '../imgs/skill.png'
import {Link} from "react-router-dom"

const toProfilesCard = () => {
  return (
    <Card sx={{ maxWidth: 360}} >
    <CardContent>
    <img src={skillicon} alt="skill" id="skillicon" />
      <Typography variant="body2">
          <Button variant="linkto"> <Link to="/skill">Aboutページへ</Link> </Button>
      </Typography>
    </CardContent>
  </Card>
  )
}

export default toProfilesCard
