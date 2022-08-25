import React from 'react'
import BitesSection from "../components/PageSections/BitesSection";
import SessionsSection from "../components/PageSections/SessionsSection";
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