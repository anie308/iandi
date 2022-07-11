import React from 'react'
import BitesSection from '../components/BitesSection'
import CoursesSection from '../components/Courses'
import HomeHero from '../components/HomeHero'
import NavBar from '../components/NavBar'

function Home() {
   
  return (
    <div>
        <NavBar/>
        <HomeHero/>
        <CoursesSection/>
        <BitesSection/>
    </div>
  )
}

export default Home