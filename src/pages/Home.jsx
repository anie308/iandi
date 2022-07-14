import React from 'react'
import BitesSection from '../components/BiteReads/BitesSection'
import CoursesSection from '../components/Courses/CoursesSection'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import NavBar from '../components/NavBar'
import SessionsSection from '../components/Sessions/SessionsSection'
import SupportSection from '../components/SupportSection'
import TestimonialSection from '../components/Testimonials/TestimonialSection'

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
        <Footer/>
    </div>
  )
}

export default Home