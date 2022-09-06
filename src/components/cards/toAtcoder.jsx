import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import atcoderIcon from '../imgs/Atcoder.png'
import {Link} from "react-router-dom"

const toAtcoder = () => {
  return (
    <Card sx={{ maxWidth: 360}} >
      <CardContent>
      <img src={atcoderIcon} alt="atcoder" id="atcoderIcon" />
        <Typography variant="body2">
            <Button variant="linkto"> <a href="https://atcoder.jp/users/Hirap">Atcoderページへ</a></Button>
        </Typography>
      </CardContent>
    </Card>
    )
}

export default toAtcoder
