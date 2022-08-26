import React from 'react'
import BitesSection from '../components/Sections/BitesSection'
import CoursesSection from '../components/Sections/CoursesSection'
import HomeHero from '../components/Hero/HomeHero'
import SessionsSection from '../components/Sections/SessionsSection'
import SupportSection from '../components/Sections/SupportSection'
import TestimonialSection from '../components/Sections/TestimonialSection'
import NavBar from '../components/Navbar/NavBar'

function Home() {
   
  return (
    <div>
      <NavBar/>
        <HomeHero/>
        <CoursesSection/>
        <BitesSection/>
        <SessionsSection/>
        <SupportSection/>
        <TestimonialSection/>
       
    </div>
  )
}

export default Home