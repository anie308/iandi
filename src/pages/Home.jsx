import React from 'react'
import Courses from '../components/Courses'
import HomeHero from '../components/HomeHero'
import NavBar from '../components/NavBar'

function Home() {
   
  return (
    <div>
        <NavBar/>
        <HomeHero/>
        <Courses/>
    </div>
  )
}

export default Home