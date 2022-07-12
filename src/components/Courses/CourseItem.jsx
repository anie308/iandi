import React from "react";
import Thumbnail from "../../assets/thumbnail.png";
import { Link } from "react-router-dom";
function CourseItem({ course }) {
  return (
    <div className="min-w-[267px] max-h-[500px] sm:min-w-[267px]  rounded-[15px]">
      <div className="relative w-full ">
        <div>
          <img
            src={Thumbnail}
            alt=""
            className="rounded-t-[20px] w-full object-cover"
          />
        </div>
        <div className="absolute top-[20px] bg-[#33658A] text-white py-[2px] rounded-r-[20px] px-[10px] flex items-center text-lato text-[12px] ">
          {course.status}
        </div>
      </div>
      <div className="flex flex-col w-full bg-primary">
        <div className="py-[10px] text-center font-[700] font-raleway text-[16px] ">
          {course.name}
        </div>
        <div className="px-[10px] pb-[20px] text-lato text-[14px] md:text-[16px]">{course.meta}</div>
      </div>
      <div className="bg-[#33658A] py-[15px] flex items-center justify-center rounded-b-[15px] cursor-pointer">
        <Link
          to={`/courses/${course.slug}`}
          className="text-lato text-[16px] text-white"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}

export default CourseItem;
