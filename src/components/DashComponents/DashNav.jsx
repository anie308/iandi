import React from 'react'
import Logo from '../../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

function DashNav({toggle, isToggled}) {
    const handleClick = () => {
        isToggled(!toggle)
    }
  return (
    <div className='bg-[#FAFAFA] py-[12px] px-[20px] flex justify-between md:justify-end items-center  '>
        <div className='flex md:hidden'>
            <img src={Logo} alt="" />
        </div>
        <div className='flex md:hidden text-[25px]  items-center justify-center' onClick={handleClick}>{toggle? <FaTimes/> : <FaBars/>}</div>
        <div className='hidden md:flex'>
            <p className='text-[14px] md:text-[22px] font-raleway font-[600] '>Welcome (Yushi)</p>
        </div>
    </div>
  )
}

export default DashNav