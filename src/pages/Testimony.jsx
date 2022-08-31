import React from 'react'
import TestimonialSection from '../components/Sections/TestimonialSection'
import TestimonyPageSection from '../components/PageSections/TestimonyPageSection'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'

function Testimony() {
  return (
    <div>
        <NavBar/>
        <TestimonyPageSection/>
        <TestimonialSection/>
        <Footer/>

    </div>
  )
}

export default Testimony