import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashNav from '../DashComponents/DashNav'
import Sidebar from '../DashComponents/Sidebar'

function DashboardLayout() {
  const [toggle, isToggled] = useState(false);
  return (
    <div className='h-full min-h-screen max-h-screen flex min-w-screen'>
 
     <Sidebar toggle={toggle} isToggled={isToggled}/>

      <div className='grow max-h-screen'>
      
          <DashNav toggle={toggle} isToggled={isToggled}/>
        <div className='max-h-screen '>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

//div className='flex relative max-h-screen min-w-screen'>
//<SideBar open={open} setOpen={setOpen}/>
//<div className="flex flex-col overflow-y-scroll grow">
//<Navbar open={open} setOpen={setOpen} />
//<div className="max-h-screen">
//<div className="max-h-screen bg-[#F9FAFF]">
 // <Outlet />
//</div>
//</div>
//</div>
//</div>

export default DashboardLayout