import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../DashComponents/Sidebar";

function DashboardLayout() {
  const [toggle, isToggled] = useState(false);
  return (
    <div className="h-full min-h-screen max-h-screen flex min-w-screen">
      <Sidebar toggle={toggle} isToggled={isToggled} />

      <div className="grow min-h-screen  max-h-screen">
        <div className="max-h-screen min-h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}



export default DashboardLayout;
