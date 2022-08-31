import React from 'react'
import SuccessSection from '../components/Sections/SuccessSection'
import SupportPageSection from '../components/PageSections/SupportPageSection'
import TestimonialSection from '../components/Sections/TestimonialSection'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'

function Support() {
  return (
    <div>
          <NavBar/>
        <SupportPageSection/>
        <SuccessSection/>
        <TestimonialSection/>
        <Footer/>

    </div>
  )
}

export default Support