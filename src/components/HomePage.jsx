import React from 'react'
import ToskillCard from './cards/toSkillCard'
import ToProfilesCard from './cards/toProfilesCard'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import HomeCard from './HomeCard'


const HomePage = () => {
  return (
    <>
    <div id ="HomePage">
    <Grid container spacing={0} >
      <Grid item xs={2}> </Grid>
      <Grid item xs={3}>  <HomeCard style={{margin:'auto', width:'50%',height:'40%'}}></HomeCard>  </Grid>
        <Stack spacing={2}>
          <Grid item  >  <ToProfilesCard></ToProfilesCard> </Grid>
          <Grid item  >  <ToskillCard></ToskillCard> </Grid>
        </Stack>
    </Grid>
    </div>
    </>


  )
}

export default HomePage
