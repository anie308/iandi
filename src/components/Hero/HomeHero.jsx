import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assets/hero.png";
import {BsChevronRight} from 'react-icons/bs'

function HomeHero() {
  return (
    <div>
      <div className="bg-[#EBEEF5] flex flex-col md:flex-row">
        <div className="px-[15px] py-[20px] md:py-[30px] md:pl-[60px] flex-1 flex flex-col items-start justify-center space-y-4">
          <div className="font-[800] text-center md:text-left font-raleway text-[28px] md:text-[32px] leading-[39px] md:leading-[44px]">
            Learn to achieve your <br className="hidden md:block" /> development
            goals
          </div>
          <div className="font-[700] text-[16px] text-center  md:text-left font-lato leading-[22px]">
            Advance your career personal goals with{" "}
            <span className="text-[#62748C]">
              self-paced online <br className="hidden md:block" /> courses
            </span>
            ,<span className="text-[#F6C042]"> bite-sized reads</span>{" "}
            <span className="text-[#EB6D74]">and live sessions</span> . Designed
            for busy professionals.
          </div>

          <div className="hidden md:flex mt-[30px] text-[rgb(67,149,193)]  border w-fit border-[#4395C1] px-[20px] py-[8px] rounded-[10px] font-lato">
            <Link to="/about-us" className="text-[14px]">Learn more about us</Link>
          </div>
        </div>
        <div className="flex-1 px-[15px] md:p-0 w-full h-full">
          <img src={Hero} alt="hero" className="h-full w-full md:h-fit rounded-[15px] md:rounded-none" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center py-[10px] px-[20px] md:px-[6px] md:py-[50px]   ">
        <div className="flex flex-col flex-1 border-b-[2px]  md:border-b-0  md:border-r-[2px] border-[#D4D4D4] md:px-[20px] items-start md:items-center space-y-1 md:space-y-2 py-[20px] md:py-0">
          <p className="font-[700] text-start md:text-center text-[16px] font-raleway">
            For all professionals, all over the world
          </p>
          <p className="text-start md:text-center text-[14px] font-lato">
            Start with fundamentals or dive into specific areas of{" "}
            <br className="hidden md:block" /> development. I&I’s content is
            built for professionals <br className="hidden md:block" />
            who are ambitious to advanced to next milestone.
          </p>
        </div>
        <div className="flex-1 border-b-[2px]  md:border-b-0 md:border-r-[2px] py-[20px] md:py-0 md:px-[20px] border-[#D4D4D4] items-start md:items-center space-y-2">
          <p className="font-[700] text-start md:text-center font-raleway">
            For all professionals, all over the world
          </p>
          <p className="text-start md:text-center font-lato">
            Build confidence with hands-on learning. You’ll get{" "}
            <br className="hidden md:block" /> to see the concepts visually,
            interact through <br className="hidden md:block" /> activities and
            get regular feedback upon request.
          </p>
        </div>
        <div className="flex-1 border-b-[2px]  md:border-b-0 md:px-[20px] items-start md:items-center space-y-2 py-[20px] md:py-0">
          <p className="font-[700] text-start md:text-center text-[16px] font-raleway">
            Stress less, live better
          </p>
          <p className="text-start md:text-center font-lato">
            Discover, learn and apply what you learn at your own{" "}
            <br className="hidden md:block" /> pace. Enjoy learning through
            various structures and <br className="hidden md:block" /> with a
            community of like minded peers.
          </p>
        </div>
        <div className="flex md:hidden py-[30px] border-b border-[#333333] w-full  justify-center items-center ">
          <Link to="/about-us" className="flex items-center space-x-2 text-lato text-[16px] text-[#33658A]"><p className="flex items-center">Learn more about us</p>  <div className="flex items-center border rounded-full p-[3px] text-[14px] border-[#33658A] text-[#33658A] cursor-pointer"><BsChevronRight/></div></Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
