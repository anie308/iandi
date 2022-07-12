import React from 'react'
import BitesSection from '../components/BiteReads/BitesSection'
import CoursesSection from '../components/Courses/CoursesSection'
import HomeHero from '../components/HomeHero'
import NavBar from '../components/NavBar'
import SessionsSection from '../components/Sessions/SessionsSection'

function Home() {
   
  return (
    <div>
        <NavBar/>
        <HomeHero/>
        <CoursesSection/>
        <BitesSection/>
        <SessionsSection/>
    </div>
  )
}

export default Home