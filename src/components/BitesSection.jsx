import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronRight, BsChevronLeft } from "react-icons/bs";
import BiteListing from './BiteListing'

function BitesSection() {
  return (
    <div className="flex flex-col w-full py-[20px] mt-[30px]">
   
    <div className="px-[20px] md:px-[58px]">
      <div>
          <p className="font-montserrat text-[18px] font-[400] ">Bite-sized Reads</p>
      </div>
      <div id="dev" className="flex items-center justify-between">
          <div className="mt-[8px]flex items-center justify-center">
              <p className="font-[800] font-raleway text-[20px] md:text-[24px]">Stay updated, stay inspired - even if you’re <span className='text-[#F6C042]'> short on time</span></p>
          </div>
          <div className="hidden md:flex items-center space-x-3">
              <div>
                  <Link to='/courses' className="font-lato text-[16px] font-[400] border border-[#F6C042] text-[#F6C042] py-[8px] px-[15px] rounded-[3px]  text-lato">See All</Link>
              </div>
              <div className='flex items-center space-x-2'>
                  <div className="border rounded-full p-[9px] text-[20px] border-[#33658A] text-[#F6C042] cursor-pointer"> <BsChevronLeft/></div>
                  <div className="border rounded-full p-[9px] text-[20px] border-[#33658A] text-[#33658A] cursor-pointer"><BsChevronRight/></div>
                  
              </div>
          </div>
      </div>

      <div className="my-[20px]">
          <BiteListing/>
      </div>
    </div>

  </div>
  )
}

export default BitesSection