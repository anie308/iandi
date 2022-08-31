import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import CourseListing from "../Lisitings/CourseListing";

function CoursesSection() {
  return (
    <div className="flex flex-col w-full px-[20px] md:px-[38px] lg:px-[80px]">
      <div className="w-full flex flex-col justify-center pt-[20px]">
        <div>
         
          <p className="font-[800] text-[24px] md:text-[28px] font-raleway text-left md:text-center ">
            See professional and personal <br className="hidden md:block" /> development in a 
             <span className="text-[#4395C1]"> new way</span>
          </p>
        </div>
        <div className="hidden md:flex w-full  justify-center mt-[15px]">
          <a href="#dev">
            <BsChevronDoubleDown className="text-[30px] text-[#4395C1]" />
          </a>
        </div>
      </div>
      <div className="mt-[30px] ">
        <div>
            <p className="font-montserrat text-[14px] font-[400] ">DEVELOPER COURSES</p>
        </div>
        <div id="dev" className="flex items-center justify-between">
            <div className="mt-[8px]flex items-center justify-center">
                <p className="font-[800] font-raleway text-[20px] ">Online courses for you learn at <br className='block md:hidden '/><span className="text-[#33658A]" >your own pace</span></p>
            </div>
            <div className="hidden md:flex items-center space-x-3">
                <div>
                    <Link to='/courses' className="font-lato text-[16px] font-[400] border border-[#33658A] text-[#33658A] py-[8px] px-[15px] rounded-[3px]  text-lato">See All</Link>
                </div>
               
            </div>
        </div>

        <div className="my-[20px]">
            <CourseListing/>
        </div>
      </div>

    </div>
  );
}

export default CoursesSection;
