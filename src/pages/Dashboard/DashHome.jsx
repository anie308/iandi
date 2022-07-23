import React from 'react'
import DashHomeHero from '../../components/DashComponents/CourseSectionHero'
import HeroBites from '../../components/DashComponents/HeroBites'
import HeroCourse from '../../components/DashComponents/HeroCourse'
import HeroSession from '../../components/DashComponents/HeroSession'
import HeroWaitlist from '../../components/DashComponents/HeroWaitlist'

function DashHome() {
  return (
    <div className='h-full pt-[30px] '>
      <div className='flex flex-col md:flex-row px-[15px] md:px-[30px]  gap-5 max-h-[700px]'>
        <div className='flex-1 md:flex-2 w-full'>
          <DashHomeHero/>
          <div className='mt-[20px] flex flex-col md:flex-row bg-gray-100 p-[10px] gap-4 rounded-[5px]'>
            <HeroCourse/>
            <HeroSession/>
          </div>
          </div>
        <div className='flex-1 h-[235px] w-full '>
          <HeroWaitlist/>
          <HeroBites/>
        </div>
      </div>
    </div>
  )
}

export default DashHome