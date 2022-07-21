import React from "react";
import Thumbnail from "../../assets/thumbnail.png";
import { Link } from "react-router-dom";
function CourseItem({ course }) {
  const { name, slug, status, meta } = course;

  return (
    <div className="min-w-[280px] max-w-[300]   min-h-[370px] h-[370px] rounded-[20px] flex flex-col justify-between shadow">
      <div className="relative w-full ">
        <div>
          <img
            src={Thumbnail}
            alt=""
            className="rounded-t-[20px] w-full object-cover h-[200px]"
          />
        </div>
        {!!course.status && (
          <div className="absolute top-[20px] bg-[#33658A] text-white py-[2px] rounded-r-[20px] px-[10px] flex items-center text-lato text-[12px] ">
            {status}
          </div>
        )}
      </div>
      <div className="flex flex-col w-full bg-primary h-full">
        <div className="px-[10px] py-[5px] text-left font-[700] font-raleway text-[16px] ">
          {name}
        </div>
        <div className="px-[10px] pb-[10px] text-lato text-[14px] md:text-[16px] break-words">
          {meta.substring(0, 105) + "..."}
        </div>
      </div>
      <div className="bg-[#33658A] py-[15px] flex items-center justify-center rounded-b-[15px] cursor-pointer">
        <Link
          to={`/courses/${slug}`}
          className="text-lato text-[16px] text-white"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}

export default CourseItem;
