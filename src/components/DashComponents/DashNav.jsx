import React from 'react'
import {FaBars, FaTimes, FaUser} from 'react-icons/fa'
import {RiListSettingsLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

function DashNav({toggle, isToggled}) {
    const handleClick = () => {
        isToggled(!toggle)
    }
  return (
    <div className='sticky top-0 bg-gray-100 py-[20px] px-[20px] flex justify-between md:justify-end items-center flex-row-reverse md:flex-row '>
        
        <div className='flex  md:hidden text-[22px]  items-center justify-center shadow p-2 bg-gray-200' onClick={handleClick}>{toggle? <FaTimes/> : <FaBars/>}</div>
        <div className='flex items-center justify-end md:space-x-4'>
            <div className=' items-center shadow bg-gray-200 py-[8px] px-[10px] rounded-[5px] hidden md:flex'>
                <input type="text" className='bg-transparent outline-none placeholder:text-gray-900  ' placeholder='Search'/>
                <BsSearch/>
            </div>
            <Link to='/dashboard/profile' className='shadow bg-gray-200 p-2 rounded-[5px] cursor-pointer'><FaUser className='text-[22px]'/></Link>
            <Link to='/dashboard/settings' className='shadow bg-gray-200 p-2 rounded-[5px] cursor-pointer ml-[20px] md:ml-0'><RiListSettingsLine className='text-[22px]'/></Link>
        </div>
    </div>
  )
}

export default DashNav