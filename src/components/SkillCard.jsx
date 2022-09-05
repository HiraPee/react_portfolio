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
    <Card sx={{width:1200 }} >
      <CardContent>
        <Typography align='center' sx={{ fontSize: 70 }}>  <a href="https://github.com/HiraPee"><GitHubIcon></GitHubIcon></a> SKILLS  </Typography>

        <Typography align='center' sx={{fontSize: 40  }} >  Python   </Typography>
        <Typography align='center'  >  <SkillPythonCard></SkillPythonCard>   </Typography>

        <Typography align='center' sx={{fontSize: 40  }} >  React   </Typography>
        <Typography align='center'>  <SkillReactCard></SkillReactCard>   </Typography>

        <Typography align='center' sx={{fontSize: 40  }} > Java  </Typography>
        <Typography align='center'>  <SkillJavaCard></SkillJavaCard>  </Typography>

        <Typography align='center' sx={{ fontSize: 70 }}> 制作物  </Typography>
        <Typography align='center'  >  <ProductDiaryWordCloud ></ProductDiaryWordCloud> </Typography>
        <Typography align='center'  >  <ProductPortfolio ></ProductPortfolio></Typography>

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
            <Typography  align='center' sx={{fontSize: 20  }} > 初めて触った言語,学部の授業で使用.勉強の一環で人狼やブラックジャックを作成してた   </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </>
  )
}


const ProductDiaryWordCloud = () => {
  return (
    <>
    <Grid container spacing={0} >

      <Grid item xs={1}> </Grid>

      <Grid item xs={3}>
        <Card sx={{width:1000,height:150 }} >
          <CardContent>
            <Typography  align='center' sx={{fontSize: 20  }} >  <a href="https://github.com/HiraPee/word_cloud_diary"><GitHubIcon></GitHubIcon></a>  WordCloudと日記を掛け合わせたアプリ  <br />使用技術:Python,Django,Docker,HTML,CSS,SQLite3   </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </>
  )
}


const ProductPortfolio = () => {
  return (
    <>
    <Grid container spacing={0} >

      <Grid item xs={1}> </Grid>

      <Grid item xs={3}>
        <Card sx={{width:1000,height:150 }} >
          <CardContent>
            <Typography  align='center' sx={{fontSize: 20  }} >  <a href="https://github.com/HiraPee/react_portfolio"><GitHubIcon></GitHubIcon></a>  本ポートフォリオサイト,初めてのReact  <br />使用技術:ReactJS,React Material UI,HTML,CSS   </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </>
  )
}


export default SkillCard
