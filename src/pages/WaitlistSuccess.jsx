import React from 'react'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BitesSection from "../components/BiteReads/BitesSection";
import SessionsSection from "../components/Sessions/SessionsSection";
import WaitSuccess from '../components/WaitSuccess'

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