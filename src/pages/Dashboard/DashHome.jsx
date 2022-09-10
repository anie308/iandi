import React from 'react'
import DashHomeHero from '../../components/DashComponents/DashHomeHero'
import UpComingCourses from '../../components/DashComponents/UpComingCourses'
import UpcomingSessions from '../../components/DashComponents/UpcomingSessions'
import ActiveCourses from '../../components/DashComponents/ActiveCourses'
import RecentBtes from '../../components/DashComponents/RecentBites'

function DashHome() {
  return (
    <div className='h-full pt-[30px] '>
      <div className='flex flex-col md:flex-row px-[15px] md:px-[20px]  gap-3 max-h-[700px]'>
        <div className='flex-1 md:flex-2 w-full'>
          <DashHomeHero/>
          <div className='mt-[20px] flex flex-col md:flex-row  p-[10px] gap-4 rounded-[5px]'>
            <UpComingCourses/>
            <ActiveCourses/>
          </div>
          </div>
        <div className='flex-1 flex flex-col space-y-5 h-[235px] w-full '>
          <UpcomingSessions/>
          <RecentBtes/>
        </div>
      </div>
    </div>
  )
}

export default DashHome