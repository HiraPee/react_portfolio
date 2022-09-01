import * as React from 'react';
import Card from '@mui/material/Card';
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

        <Typography align='center' sx={{fontSize: 40  }} > Java  </Typography>

      </CardContent>
    </Card>

  </>
  )
}


const SkillPythonCard = () => {
  return (
    <>
    <Card sx={{width:300,height:100 }} >
      <CardContent>
        <Typography align='left' sx={{fontSize: 20  }} >  研究や競技プログラミングで使用.初めてやりたいと思った言語なので好き   </Typography>
      </CardContent>
    </Card>

  </>
  )
}

export default SkillCard
