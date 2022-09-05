import React from "react";
import { courseDetails } from "../../data";
// import Thumbnail from '../../assets/thumbnail.png'
import { Link } from "react-router-dom";

function UpComingCourses() {
  const upcoming = courseDetails.filter(e => e.status === 'Coming Soon')
  return (
    <div className="flex-1 w-full  p-[10px] rounded-[5px]">
      <div className="flex items-center justify-between">
        <div className="text-[20px] font-raleway font-[800] text-[#333333]">
          Upcoming Courses
        </div>
        <div className="text-[14px] font-[400] font-lato text-[#33658A]">
          <Link to="/dashboard/courses">See All</Link>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-[20px]">
        {upcoming.slice(0, 4).map(({ id, name, meta, status }) => (
          <div
            className="bg-[#FAFAFA] rounded-[8px] p-[12px] flex flex-col items-start  h-[100px] "
            key={id}
          >
            <p
              className='bg-[#FBDF8B] uppercase text-[#333333] font-montserrat text-[12px] p-[4px_8px] rounded-[5px]'
            >
              {status}
            </p>
            <p className="font-raleway text-[16px] font-[700] leading-[22px] mt-[10px]">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpComingCourses;
