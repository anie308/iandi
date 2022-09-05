import React from "react";
import { Link } from "react-router-dom";

function DashHomeHero() {
  

  return (
    <div className="flex items-center justify-center md:justify-start w-full gap-2">
        <div className="bg-[#EBEEF5] flex-1 flex items-center justify-center rounded-[8px]">
          <div className="flex flex-col flex-1 p-[12px_20px] ">
            <p className="font-[800] font-raleway text-[28px] leading-[39px]">20</p>
            <p className="font-montserrat font-[400] text-[12px] leading-[16px]">NEW WAITLISTS</p>
          </div>
          <div className="bg-[#D4D4D4] w-[1px] h-[60px]"></div>
          <div className="flex flex-col flex-1 p-[12px_20px] ">
          <p className="font-[800] font-raleway text-[28px] leading-[39px]">20</p>
            <p className="font-montserrat font-[400] text-[12px] leading-[16px]">UPCOMING COURSES</p>
          </div>
        </div>
        <div className="bg-[#EBEEF5] flex-1 flex items-center justify-center rounded-[8px]">
          <div className="flex flex-col flex-1 p-[12px_20px] ">
            <p className="font-[800] font-raleway text-[28px] leading-[39px]">20</p>
            <p className="font-montserrat font-[400] text-[12px] leading-[16px]">NEW REGISTRATIONS</p>
          </div>
          <div className="bg-[#D4D4D4] w-[1px] h-[60px]"></div>
          <div className="flex flex-col flex-1 p-[12px_20px] ">
          <p className="font-[800] font-raleway text-[28px] leading-[39px]">20</p>
            <p className="font-montserrat font-[400] text-[12px] leading-[16px]">ACTIVE COURSES</p>
          </div>
        </div>
        
    </div>
  );
}

export default DashHomeHero;
