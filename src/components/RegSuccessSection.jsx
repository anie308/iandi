import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'

function RegSuccessSection() {
  return (
    <div className='mt-[100px]'>
      <div className='w-full flex items-center justify-center'>
        <BsCheckCircleFill className='text-[70px] text-[#4395C1]'/>
      </div>
      <div className='font-[800] font-raleway text-[36px] text-center w-full'>Registration Success</div>
      <div className='text-center font-lato text-[20px] w-full mt-[10px]'>
      Your development course account details will be sent to your <br className='hidden md:block'/> registered email in 24 hours.
      </div>
    </div>
  )
}

export default RegSuccessSection