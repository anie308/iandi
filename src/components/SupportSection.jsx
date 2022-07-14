import React from 'react'
import { Link } from 'react-router-dom'
import Support from '../assets/support.png'

function SupportSection() {
  return (
    <div>
      <div className='my-[20px]  w-full flex flex-col md:flex-row '>
      <div className='flex-1 h-full'>
        <img src={Support} alt="" className='w-full lg:w-[900px]'/>
      </div>
      <div className='bg-[#EBEEF5] w-full flex-2 flex flex-col items-left justify-center pl-[30px]'>
      <p className='font-montserrat font-[500] text-[18px] '>1 to 1 SUPPORT</p>
      <p className='font-raleway font-[800] text-[26px] py-[10px]'>Book a session with our experts for a <span className='text-[#4395C1]'>detailed analysis</span> <br className='hidden md:block'/> and <span className='text-[#4395C1]'>individual consultation</span></p>
      <p className='text-[18px] font-lato font-[500] '>Complimentary session is available upon completion of <span className='text-[#4395C1] underline underline-offset-2'> Fundamental B.A.S.I.C.S </span><br className='hidden md:block'/> development class</p>
      
      <Link to='/session/' className='mt-[20px] bg-[#4395C1] text-white px-[20px] py-[8px] rounded-[10px] w-fit font-lato'>
        Find Out More 
      </Link>
      </div>
    </div>
    </div>
  )
}

export default SupportSection