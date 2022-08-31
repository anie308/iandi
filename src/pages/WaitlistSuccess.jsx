import React from 'react'
import BitesSection from "../components/Sections/BitesSection";
import SessionsSection from "../components/Sections/SessionsSection";
import WaitSuccess from '../components/SuccessSection/WaitSuccess'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'

function WaitlistSuccess() {
  return (
    <div>
      <NavBar/>
      <WaitSuccess/>
      <BitesSection/>
      <SessionsSection/>
      <Footer/>
    </div>
  )
}

export default WaitlistSuccess