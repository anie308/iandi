import React from 'react'
import BitesSection from '../components/PageSections/BitesSection'
import CoursesSection from '../components/PageSections/CoursesSection'
import HomeHero from '../components/Hero/HomeHero'
import SessionsSection from '../components/PageSections/SessionsSection'
import SupportSection from '../components/Misc/SupportSection'
import TestimonialSection from '../components/PageSections/TestimonialSection'

function Home() {
   
  return (
    <div>

        <HomeHero/>
        <CoursesSection/>
        {/* <BitesSection/> */}
        <SessionsSection/>
        <SupportSection/>
        <TestimonialSection/>
       
    </div>
  )
}

export default Home