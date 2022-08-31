import React from "react";
import NavBar from '../components/Navbar/NavBar'

import BitesSection from "../components/Sections/BitesSection";
import SessionsSection from "../components/Sections/SessionsSection";
import RegSuccessSection from "../components/SuccessSection/RegSuccessSection";
import Footer from '../components/Footer/Footer'

function RegistrationSuccess() {
  return (
    <div>
      <NavBar/>
      <RegSuccessSection/>
      <BitesSection/>
      <SessionsSection/>
      <Footer/>
     
    </div>
  );
}

export default RegistrationSuccess;
