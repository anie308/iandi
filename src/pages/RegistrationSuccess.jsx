import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BitesSection from "../components/BiteReads/BitesSection";
import SessionsSection from "../components/Sessions/SessionsSection";
import RegSuccessSection from "../components/RegSuccessSection";

function RegistrationSuccess() {
  return (
    <div>
      <NavBar />
      <RegSuccessSection/>
      <BitesSection/>
      <SessionsSection/>
      <Footer />
    </div>
  );
}

export default RegistrationSuccess;
