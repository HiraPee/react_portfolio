import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import qiitaIcon from '../imgs/qiita.png'
import {Link} from "react-router-dom"

const toQiita = () => {
  return (
    <Card sx={{ maxWidth: 360}} >
      <CardContent>
      <img src={qiitaIcon} alt="qiita" id="qiitaIcon" />
        <Typography variant="body2">
            <Button variant="linkto"> <a href="https://qiita.com/hori_hira_yu">Qiitaページへ</a> </Button>
        </Typography>
      </CardContent>
    </Card>
    )
}

export default toQiita
