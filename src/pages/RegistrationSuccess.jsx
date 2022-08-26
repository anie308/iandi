import React from "react";

import BitesSection from "../components/Sections/BitesSection";
import SessionsSection from "../components/Sections/SessionsSection";
import RegSuccessSection from "../components/SuccessSection/RegSuccessSection";

function RegistrationSuccess() {
  return (
    <div>
      
      <RegSuccessSection/>
      <BitesSection/>
      <SessionsSection/>
     
    </div>
  );
}

export default RegistrationSuccess;
