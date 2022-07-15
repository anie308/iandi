import React from 'react'
import { Link } from 'react-router-dom';
import Thumbnail from "../../assets/thumbnail2.png";


function SessionItem({session}) {
  const { title,  slug, createdAt } = session;

  return (
    <div className="min-w-[280px] max-w-[300]    min-h-[340px]    rounded-[15px]">
    <div className="w-full">
      <div>
        <img
          src={Thumbnail}
          alt="thumbnail"
          className="h-[180px] rounded-t-[20px] w-full object-cover"
        />
      </div>
   
    </div>
    <div className="flex flex-col w-full bg-primary px-[15px]">
      <div className="py-[10px] text-left font-[700] font-raleway text-[16px] ">
        {title}
      </div>
      <div className=" pb-[20px] text-lato text-[14px] md:text-[16px] flex items-center  uppercase">
       <span> {createdAt}</span>
        </div>
    </div>
    <div className="bg-[#EB6D74] py-[15px] flex items-center justify-center rounded-b-[15px] cursor-pointer">
      <Link
        to={`/sessions/${slug}`}
        className="text-lato text-[16px] text-white"
      >
       Read Now
      </Link>
    </div>
  </div>
  )
}

export default SessionItem
