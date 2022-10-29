import React from 'react'
import ToskillCard from './cards/toSkillCard'
import ToProfilesCard from './cards/toProfilesCard'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import HomeCard from './HomeCard'
import ToQiita from './cards/toQiita'
import ToAtocoder from './cards/toAtcoder'




const HomePage = () => {
  return (
    <>
    <div id ="HomePage">
    <Grid container spacing={0} >
      <Grid item xs={2}> </Grid>
      <Grid item xs={3}>  <HomeCard ></HomeCard>  </Grid>
      <Grid item xs={3}>
        <Stack spacing={2}>
          <Grid item  >  <ToProfilesCard></ToProfilesCard> </Grid>
          <Grid item  >  <ToskillCard></ToskillCard> </Grid>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2}>
          <Grid item  >  <ToQiita></ToQiita> </Grid>
          <Grid item  >  <ToAtocoder></ToAtocoder> </Grid>
        </Stack>
      </Grid>
    </Grid>
    </div>
    </>

  )
}

export default HomePage
