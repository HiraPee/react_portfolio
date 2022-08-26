import React from 'react'
import myicon from './imgs/ALN.PNG'
import style from './css/HomePage.css'
import Card from './Card'


const HomePage = () => {
  return (
    <div id ="HomePage">
    <img src={myicon} alt="ALN" id="homeicon" />
    <Card>kkkk</Card>
    <p>ここでは堀内優太についてお話ししています</p>
  </div>
  )
}

export default HomePage
