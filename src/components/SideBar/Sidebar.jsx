import React from 'react'
import Logo from '../../assets/logo.png'


function Sidebar({toggle, isToggled}) {
  return (
    <div className={`${toggle? 'left-0 z-30 lg:left-0':'left-[-100%] lg:left-0'}      absolute lg:relative w-[240px] h-screen transition-left p-[30px] flex flex-col  justify-between bg-[#FAFAFA]
    `}>
      <div>
      <div className='hidden md:flex w-full items-center justify-center'>
            <img src={Logo} alt="" />
        </div>
        <div>

        </div>
      </div>
        <div className='flex md:hidden '>
            <p className='text-[22px] font-raleway font-[600] '>Welcome (Yushi)</p>
        </div>

    </div>
  )
}

export default Sidebar