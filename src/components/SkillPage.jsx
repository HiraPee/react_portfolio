import * as React from 'react';
import SkillCard from './SkillCard'
import Grid from '@mui/material/Grid';

const SkillPage = () => {
  return (
    <>
    <div id ="SkillPage">
    <Grid container spacing={0} >
      <Grid item xs={2}> </Grid>
      <Grid item xs={3}>  <SkillCard style={{margin:'auto', width:'30%',height:'10%'}}></SkillCard>  </Grid>
    </Grid>
    </div>
    </>

  )
}

export default SkillPage
