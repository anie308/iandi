import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FiChevronLeft } from "react-icons/fi";
import { default as api } from "../../services/coursesApi";
import { useParams } from "react-router-dom";
import { courseDetails } from "../../data";


function DashViewCourse() {
  const { slug } = useParams();
  const { data, error, isLoading, isSuccess } = api.useCoursesQuery();
  const courses = data?.courses;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const course = courseDetails?.find((courseItem) => courseItem.slug === slug);
    if (course) {
      setCourse(course);
    }
  }, [slug, courses]);

  return (
    <div className="p-[30px] ">
      <div className="  flex items-center w-full justify-between">
        <div className="border border-[#33658A] p-[5px] h-fit rounded-[5px]">
          <Link
            to="/dashboard/courses"
            className="flex items-center space-x-2 p-[5px_20px]"
          >
            <FiChevronLeft className="text-[#33658A]" />
            <p className="font-lato text-[14px] font-[400] text-[#33658A]">
              Back
            </p>
          </Link>
        </div>
        <div className=" bg-[#33658A] p-[5px] h-fit rounded-[5px]">
          <Link
            to={`/dashboard/update-course/${slug}`}
            className="flex items-center space-x-2 p-[5px_20px]"
          >
            <MdEdit className="text-white" />
            <p className="font-lato text-[14px] font-[400] text-white">Edit</p>
          </Link>
        </div>
      </div>
      <div className="w-full flex mt-[30px]">
        {isLoading && (
          <div className="h-[125px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center animate-pulse">
            Loading...
          </div>
        )}
        {error && (
          <div className="h-[125px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center">
            Something went wrong{" "}
          </div>
        )}
        {isSuccess && (
          <div className='w-full'>
            {course ? (
              <div className="flex w-full gap-4">
                <div className="flex-2 w-full bg-[#FAFAFA] rounded-[5px] p-[15px] h-[830px]">
                  <p className="font-[800] font-raleway text-[20px] leading-[28px]">{course.name}</p>
                </div>
                <div className="flex-1">
                 <p className={`${course.status === 'Coming Soon' ? 'bg-[#FBDF8B] ' : 'bg-[#94DBEF]'} rounded-[4px] p-[4px_8px] text-[12px] uppercase w-fit` }>{course.status} {course.status === 'Coming Soon' ?  ' in August' :'' }</p>
                 <div className='mt-[15px]'>
                  <img src="" alt=""  className="border w-[160px] h-[95px]"/>
                 </div>
                 <div className="w-full bg-[#FAFAFA] p-[10px] mt-[15px] rounded-[5px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iusto ab numquam non animi dignissimos, modi eveniet omnis, vero maxime vitae commodi perferendis expedita obcaecati corporis pariatur corrupti impedit ex?
                 </div>
                </div>
              </div>
            ) : (
              <div className="h-[125px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center">
                Can't find Course{" "}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashViewCourse;
