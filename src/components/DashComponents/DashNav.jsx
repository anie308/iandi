import React from 'react'
import {FaBars, FaTimes, FaUser} from 'react-icons/fa'
import {RiListSettingsLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {useLocation } from 'react-router-dom'

function DashNav({toggle, isToggled}) {
    const handleClick = () => {
        isToggled(!toggle)
    }
    const location = useLocation()
    const name = location.pathname.split('/')[2]
    // console.log(name)
  return (
    <div className='sticky top-0 bg-gray-100 py-[20px] px-[20px] flex justify-between md:justify-end items-center flex-row-reverse md:flex-row '>
        
        <div className='flex  md:hidden text-[22px]  items-center justify-center shadow p-2 bg-gray-200' onClick={handleClick}>{toggle? <FaTimes/> : <FaBars/>}</div>
        <div className='flex items-center justify-end md:space-x-4'>
           <p className='capitalize'>{name}</p>
            
        </div>
    </div>
  )
}

export default DashNav