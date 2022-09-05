import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './css/HomePage.css'
import GitHubIcon from '@mui/icons-material/GitHub';


const SkillCard = () => {
  return (
    <>
    <Card sx={{width:1200,height:800 }} >
      <CardContent>
        <Typography align='center' sx={{ fontSize: 70 }}>  <a href="https://github.com/HiraPee"><GitHubIcon></GitHubIcon></a> SKILLS  </Typography>

        <Typography align='center' sx={{fontSize: 40  }} >  Python   </Typography>
        <Typography align='center'  >  <SkillPythonCard></SkillPythonCard>   </Typography>

        <Typography align='center' sx={{fontSize: 40  }} >  React   </Typography>
        <Typography align='center'>  <SkillReactCard></SkillReactCard>   </Typography>

        <Typography align='center' sx={{fontSize: 40  }} > Java  </Typography>
        <Typography align='center'>  <SkillJavaCard></SkillJavaCard>  </Typography>

      </CardContent>
    </Card>

  </>
  )
}


const SkillPythonCard = () => {
  return (
    <>
    <Grid container spacing={0} >

      <Grid item xs={4}> </Grid>

      <Grid item xs={3}>
        <Card sx={{width:400,height:120 }} >
          <CardContent>
            <Typography  align='center' sx={{fontSize: 20  }} >  研究や競技プログラミングで使用.初めてやりたいと思った言語なので好き   </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </>
  )
}

const SkillReactCard = () => {
  return (
    <>
    <Grid container spacing={0} >

      <Grid item xs={4}> </Grid>

      <Grid item xs={3}>
        <Card sx={{width:400,height:120 }} >
          <CardContent>
            <Typography  align='center' sx={{fontSize: 20  }} > おしゃれなイメージがあるのと   <br />情報量の多さが魅力,初心者   </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </>
  )
}

const SkillJavaCard = () => {
  return (
    <>
    <Grid container spacing={0} >

      <Grid item xs={4}> </Grid>

      <Grid item xs={3}>
        <Card sx={{width:400,height:150 }} >
          <CardContent>
            <Typography  align='center' sx={{fontSize: 20  }} > 初めて触った言語,学部の授業で使用.勉強の一環で人狼やブラックジャックを作成   </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </>
  )
}

export default SkillCard
