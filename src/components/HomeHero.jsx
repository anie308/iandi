import React from 'react';
import Hero from '../assets/hero.png'

function HomeHero() {
  return (
    <div>
      <div className='bg-[#EBEEF5] flex flex-col md:flex-row'>
        <div className='px-[15px] py-[20px] md:py-[30px] md:pl-[60px] flex-1 flex flex-col items-start justify-center space-y-4'>
            <div className='font-[800] text-center md:text-left font-raleway text-[30px] md:text-[40px]'>Learn to achieve your <br className='hidden md:block'/> development goals</div>
            <div className='font-[500] text-[16px] text-center  md:text-left  md:text-[20px]'>Advance your career personal goals with <span className='text-[#62748C]'>self-paced online <br className='hidden md:block'/> courses</span>,<span className='text-[#F6C042]'> bite-sized reads</span> <span className='text-[#EB6D74]'>and live sessions</span> . Designed for busy professionals.</div>

            <div className='hidden md:flex mt-[20px] text-[#4395C1] border-dotted border-[2px] w-fit border-[#4395C1] px-[20px] py-[8px] rounded-[10px]'>Learn more about us</div>
        </div>
        <div  className='flex-1'>
            <img src={Hero} alt="hero" className='h-full'/>
        </div>
    </div>
    <div className='flex flex-col md:flex-row items-start md:items-center p-[10px] md:px-[20px] md:py-[50px]'>
      <div className='flex flex-col flex-1  md:border-r-[2px] border-[#D4D4D4] md:px-[20px] items-start md:items-center space-y-1 md:space-y-2'>
        <p className='font-[700] text-start md:text-center text-[18px]'>For all professionals, all over the world</p>
        <p className='text-start md:text-center'>Start with fundamentals or dive into specific areas of <br className='hidden md:block'/> development. I&I’s content is built for professionals <br className='hidden md:block'/>who are ambitious to advanced to next milestone.</p>
      </div>
      <div className='flex-1 border-b-[2px]  md:border-r-[2px] py-[20px] md:py-0 md:px-[20px] border-[#D4D4D4] items-start md:items-center space-y-2'>
        <p className='font-[700] text-start md:text-center'>For all professionals, all over the world</p>
        <p className='text-start md:text-center'>Build confidence with hands-on learning. You’ll get <br className='hidden md:block'/> to see the concepts visually, interact through <br className='hidden md:block'/> activities and get regular feedback upon request.</p>
      </div>
      <div className='flex-1  md:px-[20px] items-start md:items-center space-y-2'>
        <p className='font-[700] text-start md:text-center text-[18px]'>Stress less, live better</p>
        <p className='text-start md:text-center'>Discover, learn and apply what you learn at your own <br className='hidden md:block'/> pace. Enjoy learning through various structures and <br className='hidden md:block'/> with a community of like minded peers.</p>
      </div>
      
    </div>
    </div>
  )
}

export default HomeHero