import React from 'react'
import Grid from '@mui/material/Grid';
import AboutCard from './AboutCard'

const AboutPage = () => {
  return (
    <>
    <div id ="AboutPage">
    <Grid container spacing={0} >
      <Grid item xs={2}> </Grid>
      <Grid item xs={3}>  <AboutCard style={{margin:'auto', width:'30%',height:'10%'}}></AboutCard>  </Grid>
    </Grid>
    </div>
    </>

  )
}

export default AboutPage
