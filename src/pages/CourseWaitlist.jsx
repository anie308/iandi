import React from 'react'
import CourseWaitlistSection from '../components/Forms/CourseWaitlistSection'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'

function CourseWaitlist() {
  return (
    <div>
      <NavBar/>
      <CourseWaitlistSection />
      <Footer/>
    </div>
  )
}

export default CourseWaitlist