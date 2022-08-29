import React from 'react'
import myicon from './imgs/ALN.PNG'
import style from './css/HomePage.css'
import Card from './Card'
import ToskillCard from './cards/toSkillCard'
import ToProfilesCard from './cards/toProfilesCard'
import Grid from '@mui/material/Grid';


const HomePage = () => {
  return (
    <>
    <div id ="HomePage">
    <Grid container spacing={2} >
    <Grid item xs={2}></Grid>
    <Grid item xs={3}>  <Card style={{margin:'auto', width:'50%'}}></Card>  </Grid>

    <Grid item xs={6}>  <ToProfilesCard></ToProfilesCard> </Grid>
    <Grid item xs={1}>  <ToskillCard></ToskillCard> </Grid>
    </Grid>

    </div>
    </>


  )
}

export default HomePage
