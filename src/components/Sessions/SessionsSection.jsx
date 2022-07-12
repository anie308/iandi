import React from 'react'
import { Link } from 'react-router-dom'
import SessionListing from './SessionListing'

function SessionsSection() {
  return (
    <div className="flex flex-col w-full px-[20px] md:px-[38px] lg:px-[58px] mt-[70px]">
   
    <div className="">
      <div>
          <p className="font-montserrat text-[18px] font-[400] mb-[20px]">LIVE SESSIONS</p>
      </div>
      <div id="dev" className="flex items-center justify-between">
          <div className="mt-[8px]flex items-center justify-center">
              <p className="font-[900] font-raleway text-[18px] md:text-[20px] lg:text-[24px]">Where industry experts <span className='text-[#EB6D74]'>share advice</span>  and <span className='text-[#EB6D74]'>host <br className='hidden md:block'/>discussions</span> on a wide range of topics</p>
          </div>
          <div className="hidden md:flex items-center space-x-3">
              <div>
                  <Link to='/bites' className="font-lato text-[16px] font-[400] border border-[#EB6D74] text-[#EB6D74] py-[8px] px-[15px] rounded-[3px]  text-lato">See All</Link>
              </div>
              {/* <div className='flex items-center space-x-2'>
                  <div className="border rounded-full p-[9px] text-[20px] border-[#33658A] text-[#F6C042] cursor-pointer"> <BsChevronLeft/></div>
                  <div className="border rounded-full p-[9px] text-[20px] border-[#33658A] text-[#33658A] cursor-pointer"><BsChevronRight/></div>
                  
              </div> */}
          </div>
      </div>

      <div className="my-[20px]">
          <SessionListing/>
      </div>
    </div>

  </div>
  )
}

export default SessionsSection