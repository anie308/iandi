import React from "react";
import { default as api } from "../../services/apiSlice";
import { default as wait } from "../../services/apiSlice";
import { default as coursereg } from "../../services/apiSlice";



function DashHomeHero() {
  const {data} = api.useCoursesQuery()
  const {data: reg} = coursereg.useGetAllRegisteredQuery()
  const { data: waiters} = wait.useWaitlistsQuery()
  const waitCount = waiters?.waitlistCount
  const courseCount = reg?.regCount
  const courses = data?.courses
  const upcoming = courses?.filter(e => e.courseStatus === 'Coming Soon')
  const active = courses?.filter(e => e.courseStatus === 'Available')
  const upComingLength = upcoming?.length
  const activeLength = active?.length
  
  



  return (
    <div className="flex items-center justify-center md:justify-start w-full gap-2">
        <div className="bg-[#EBEEF5] flex-1 flex items-center justify-center rounded-[8px]">
          <div className="flex flex-col flex-1 p-[12px_20px] ">
            <p className="font-[800] font-raleway text-[28px] leading-[39px]">{waitCount}</p>
            <p className="font-montserrat font-[400] text-[12px] leading-[16px]">NEW WAITLISTS</p>
          </div>
          <div className="bg-[#D4D4D4] w-[1px] h-[60px]"></div>
          <div className="flex flex-col flex-1 p-[12px_20px] ">
          <p className="font-[800] font-raleway text-[28px] leading-[39px]">{upComingLength}</p>
            <p className="font-montserrat font-[400] text-[12px] leading-[16px]">UPCOMING COURSES</p>
          </div>
        </div>
        <div className="bg-[#EBEEF5] flex-1 flex items-center justify-center rounded-[8px]">
          <div className="flex flex-col flex-1 p-[12px_20px] ">
            <p className="font-[800] font-raleway text-[28px] leading-[39px]">{courseCount}</p>
            <p className="font-montserrat font-[400] text-[12px] leading-[16px]">NEW REGISTRATIONS</p>
          </div>
          <div className="bg-[#D4D4D4] w-[1px] h-[60px]"></div>
          <div className="flex flex-col flex-1 p-[12px_20px] ">
          <p className="font-[800] font-raleway text-[28px] leading-[39px]">{activeLength}</p>
            <p className="font-montserrat font-[400] text-[12px] leading-[16px]">ACTIVE COURSES</p>
          </div>
        </div>
        
    </div>
  );
}

export default DashHomeHero;
