import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SessionDetails from '../components/Sessions/SessionDetails'

function SessionDetail() {
  return (
    <div>
        <NavBar/>
        <SessionDetails/>
        <Footer/>
    </div>
  )
}

export default SessionDetail