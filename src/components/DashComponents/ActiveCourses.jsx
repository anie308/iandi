import React, { useState, useEffect } from "react";
// import Thumbnail from '../../assets/thumbnail.png'
import { Link } from "react-router-dom";
import { default as api } from "../../services/coursesApi";
import {BsChevronRight} from 'react-icons/bs'

function ActiveCourses() {
  const [course, setCourse] = useState(null);

  const { data, error, isLoading, isSuccess } = api.useCoursesQuery();
  const courses = data?.courses;

  useEffect(() => {
    setCourse(courses);
  }, [courses]);

  const active = course?.filter((e) => e.courseStatus === "Available");

  return (
    <div className="flex-1 w-full  p-[10px] rounded-[5px]">
      <div className="flex items-center justify-between">
        <div className="text-[20px] font-raleway font-[800] text-[#333333]">
          Active Courses
        </div>
        <div className="text-[14px] font-[400] font-lato text-[#33658A] flex items-center">
          <Link to="/dashboard/courses" className="flex items-center"><p>See All </p><BsChevronRight className="text-[12px] ml-[5px]"/></Link>
        </div>
      </div>
      <div className="flex flex-col ">
        {isLoading && (
          <div className="w-full h-[100px] bg-[#FAFAFA] animate-pulse flex items-center justify-center font-[600] font-raleway rounded-[5px] mt-[15px]">
            Loading...
          </div>
        )}
        {error && (
          <div className="w-full h-[100px] bg-[#FAFAFA] flex items-center justify-center font-raleway font-[600] mt-[10px] rounded-[5px]">
            Something went wrong
          </div>
        )}
        {isSuccess && (
          <div>
            {active?.length === 0 ? (
              <div className="w-full h-[100px] bg-[#FAFAFA] flex items-center justify-center font-raleway font-[600] mt-[10px] rounded-[5px]">
                No Active Courses Yet
              </div>
            ) : (
              <div className='flex flex-col space-y-4 mt-[20px]'>
                {active
                  ?.slice(0, 3)
                  .map(({ id, title, slug, courseStatus }) => (
                    <Link to={`/dashboard/course/${slug}`} key={id}>
                      <div className="bg-[#FAFAFA] rounded-[8px] p-[12px] flex flex-col items-start  h-[100px] ">
                        <p className="bg-[#94DBEF] uppercase text-[#333333] font-montserrat text-[12px] p-[4px_8px] rounded-[5px]">
                          {courseStatus}
                        </p>
                        <p className="font-raleway text-[16px] font-[700] leading-[22px] mt-[10px]">
                          {title}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ActiveCourses;
