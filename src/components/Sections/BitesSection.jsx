import React from 'react'
import { Link } from 'react-router-dom'
import BiteListing from '../Lisitings/BiteListing'

function BitesSection() {
  return (
    <div className="flex flex-col w-full px-[20px] md:px-[38px] lg:px-[80px] mt-[70px]">
   
    <div className="">
      <div>
          <p className="font-montserrat text-[18px] font-[400] MB-[20PX]">BITE-SIZED READS</p>
      </div>
      <div id="dev" className="flex items-center justify-between">
          <div className="mt-[8px]flex items-center justify-center">
              <p className="font-[800] font-raleway text-[18px] md:text-[20px] lg:text-[24px]">Stay updated, stay inspired - even if you’re <span className='text-[#F6C042]'> short on time</span></p>
          </div>
          <div className="hidden md:flex items-center space-x-3">
              <div>
                  <Link to='/bites' className="font-lato text-[16px] font-[400] border border-[#F6C042] text-[#F6C042] py-[8px] px-[15px] rounded-[3px]  text-lato">See All</Link>
              </div>
           
          </div>
      </div>

      <div className="my-[20px]">
      <BiteListing />
      </div>
    </div>

  </div>
  )
}

export default BitesSection