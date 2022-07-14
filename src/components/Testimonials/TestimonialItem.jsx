import React from "react";
import { Link } from "react-router-dom";
import Profile from '../../assets/profile.png'

function TestimonialItem({ testimony }) {
  return (
    <div className="min-w-[267px] max-w-[267px]     rounded-[15px] border">
      <div className="flex flex-col w-full bg-primary p-[15px] rounded-[15px]">
        <div className="pb-[20px] text-left font-[700] font-raleway text-[16px] ">
          {testimony.title}
        </div>
        <div className="py-[10px] w-full font-[700] font-raleway text-[16px] ">
          {testimony.desc}
         
        </div>
        <div className="flex items-center space-x-2 my-[10px]">
          <div>
            <img src={Profile} alt="" />
          </div>
          <div>
            <div className="text-lato text-[16px] font-[500]">{testimony.person}</div>
            <div className="text-[12px] ">JOB TITLE</div>
          </div>
        </div>
     
      </div>
      <div className="bg-[#455265] py-[15px] flex items-center justify-center rounded-b-[15px] cursor-pointer">
        <Link
          to={`/testimonies/${testimony.slug}`}
          className="text-lato text-[16px] text-white"
        >
          Read Full Story
        </Link>
      </div>
    </div>
  );
}

export default TestimonialItem;
