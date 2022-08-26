import React from "react";
import { Link} from "react-router-dom";
import Thumbnail from "../../assets/thumbnail.png";
import { IoTimeOutline } from "react-icons/io5";


function BiteItem({ bite }) {
  const { id, title, content, slug } = bite;


  
  return (
      <div
        className="min-w-[280px] max-w-[300] max-h-[360px]   rounded-[15px] flex flex-col justify-between bg-primary"
        key={id}
      >
        <div className="w-full ">
          <div>
            <img
              src={ Thumbnail}
              alt=''
              className="h-[180px] rounded-t-[20px] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col w-full bg-primary h-full p-[10px]">
          <div className="text-left font-[700] md:font-[700] font-raleway text-[16px] h-full w-full">
            {title}
          </div>
          <div className="  text-lato text-[14px] md:text-[18px] flex items-center space-x-1 h-full w-full">
            <IoTimeOutline className="text-[18px]" />
            <span className="flex items-center">
              {Math.ceil(content.trim().split(/\s+/).length / 275)} <span className="font-montserrat">MINS</span>{" "}
            </span>
          </div>
        </div>
        <div className="bg-[#F6C042] py-[15px] flex items-center justify-center rounded-b-[15px] cursor-pointer">
          <Link
            to={`/bites/${slug}`}
            className="text-lato text-[16px] text-white"
          >
            Read Now
          </Link>
        </div>
      </div>
  );
}

export default BiteItem;
