import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'


function WaitSuccess() {
  return (
    <div className='mt-[100px]'>
      <div className='w-full flex items-center justify-center'>
        <BsCheckCircleFill className='text-[70px] text-[#4395C1]'/>
      </div>
      <div className='font-[800] font-raleway text-[36px] text-center w-full'>You're on the waitlist!</div>
      <div className='text-center font-lato text-[20px] w-full mt-[10px]'>
      We will notify you through your email when <br className='hidden md:block'/> the course is available
      </div>
    </div>
  )
}

export default WaitSuccess