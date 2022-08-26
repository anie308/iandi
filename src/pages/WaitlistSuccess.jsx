import React from 'react'
import BitesSection from "../components/Sections/BitesSection";
import SessionsSection from "../components/Sections/SessionsSection";
import WaitSuccess from '../components/SuccessSection/WaitSuccess'

function WaitlistSuccess() {
  return (
    <div>
      <WaitSuccess/>
      <BitesSection/>
      <SessionsSection/>
    </div>
  )
}

export default WaitlistSuccess