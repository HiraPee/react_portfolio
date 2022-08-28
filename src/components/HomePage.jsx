import React from 'react'
import myicon from './imgs/ALN.PNG'
import style from './css/HomePage.css'
import Card from './Card'
import Grid from '@mui/material/Grid';


const HomePage = () => {
  return (
    <>
    <div id ="HomePage">
    <Grid container alignItems="center" justify="center">
    <Grid item xs={4}>   </Grid>
    <Grid item xs={5}>  <Card style={{margin:'auto', width:'50%'}}></Card>  </Grid>

    </Grid>

    </div>
    </>


  )
}

export default HomePage
