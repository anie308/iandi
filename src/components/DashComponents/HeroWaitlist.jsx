import React from "react";
import {Link}from 'react-router-dom' 
import { waitlist } from "../../data";

function HeroWaitlist() {
  return (
    <div className=" bg-gray-200 shadow p-[10px] rounded-[5px] h-full ">
      <div className="flex items-center justify-between">
        <div className="text-[18px] font-lato ">Recent Waiters</div>
        <div className="text-[16px] font-lato"><Link to='/dashboard/waitlist'>See All</Link></div>
      </div>
      <div className="flex flex-col w-full space-y-4 mt-[10px] h-full">
        {waitlist.slice(0, 2).map(({ id, email, course }) => (
          <div key={id} className="bg-white shadow px-[10px] py-[15px] rounded-[5px]">
            <div className="font-raleway font-[600]">{course}</div>
            <div className="font-lato">{email} </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroWaitlist;
