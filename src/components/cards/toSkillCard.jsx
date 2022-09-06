import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import skillicon from '../imgs/skill.png'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import { makeStyles } from '@mui/material';




const toSkillCard = () => {
  return (
  <Card sx={{ maxWidth: 360}} >
    <CardContent>
    <img src={skillicon} alt="skill" id="skillicon" />
      <Typography variant="body2">
          <Button variant="linkto"> <Link to="/skill">Skillページへ</Link> </Button>
      </Typography>
    </CardContent>
  </Card>
  )
}

export default toSkillCard
