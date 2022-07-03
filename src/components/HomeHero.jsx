import React from 'react';
import Hero from '../assets/hero.png'

function HomeHero() {
  return (
    <div className='bg-[#EBEEF5] flex flex-col md:flex-row'>
        <div className='px-[15px] py-[20px] md:py-[30px] md:pl-[60px] flex-1'>
            <div className='font-[800] text-center md:text-left font-raleway text-[30px] md:text-[40px]'>Learn to achieve your <br className='hidden md:block'/> development goals</div>
            <div className='mt-[20px] font-[500] text-[16px] text-center  md:text-left  md:text-[20px]'>Advance your career personal goals with <span className='text-[#62748C]'>self-paced online <br className='hidden md:block'/> courses</span>,<span className='text-[#F6C042]'> bite-sized reads</span> <span className='text-[#EB6D74]'>and live sessions</span> . Designed for busy professionals.</div>

            <div className='hidden md:flex mt-[20px] text-[#4395C1] border-dotted border-[2px] w-fit border-[#4395C1] px-[20px] py-[8px] rounded-[10px]'>Learn more about us</div>
        </div>
        <div  className='flex-1'>
            <img src={Hero} alt="hero" className='h-full'/>
        </div>
    </div>
  )
}

export default HomeHero