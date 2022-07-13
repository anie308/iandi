import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../../assets/thumbnail.png";
import { IoTimeOutline } from "react-icons/io5";
import readTime from "read-time";

function BiteItem({ bite }) {

const content = bite.content;
const duration = readTime(content);
  

  return (
    <div className="min-w-[300px] max-w-[300px] max-h-[450px]   rounded-[15px]">
      <div className="w-full">
        <div>
          <img
            src={Thumbnail}
            alt="thumbnail"
            className="h-[180px] rounded-t-[20px] w-full "
          />
        </div>
      </div>
      <div className="flex flex-col w-full bg-primary px-[15px]">
        <div className="py-[10px] text-left font-[700] font-raleway text-[16px] ">
          {bite.title}
        </div>
        <div className=" pb-[20px] text-lato text-[14px] md:text-[18px] flex items-center space-x-1">
          <IoTimeOutline className="text-[18px]" />
          <span className="flex items-center"> {duration.text}</span>
        </div>
      </div>
      <div className="bg-[#F6C042] py-[15px] flex items-center justify-center rounded-b-[15px] cursor-pointer">
        <Link
          to={`/bites/${bite.slug}`}
          className="text-lato text-[16px] text-white"
        >
          Read Now
        </Link>
      </div>
    </div>
  );
}

export default BiteItem;
