import React, { useState } from "react";
import Thumbnail from "../../assets/thumbnail.png";
import { faqArr } from "../../data";
import { Link } from "react-router-dom";
import { BsCaretDown } from "react-icons/bs";
import { default as api } from "../../services/apiSlice";


function CoursePageComponent() {
  const { data, error, isLoading, isSuccess } = api.useCoursesQuery();
  const courses = data?.courses;
  const [more, setMore] = useState(3);
  const [faq, setFaq] = useState(null);
  const toggle = (i) => {
    if (faq === i) {
      return setFaq(null);
    }
    setFaq(i);
  };
  return (
    <div className="px-[20px]">
      <div className="flex flex-col items-center">
        {isLoading && (
          <div className="flex flex-col md:flex-row md:h-[280px] border rounded-[10px] gap-4 animate-pulse">
            <div className="h-[280px] w-full  md:min-w-[380px] max-w-[380px] flex-1 bg-gray-200"></div>
            <div className="flex-1 md:flex-2 w-full md:min-w-[580px] md:max-w-[580px] md:p-[20px] pt-[10px] bg-gray-200"></div>
          </div>
        )}
        {error && (
          <div className="h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center mt-[20px]">Something went wrong </div>
        )}
        {isSuccess && (
          <div className="w-full mt-[30px]">
            {courses?.length === 0 ? (
              <div className="h-[300px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[25px] flex items-center justify-center">
                {" "}
                No Courses Yet
              </div>
            ) : (
              <div className=" flex flex-col items-center my-[80px] gap-10">
                {courses?.slice(0, more).map((course) => (
                  <div
                    className="flex flex-col md:flex-row md:h-[280px] border rounded-[10px]"
                    key={course.id}
                  >
                    <div className="h-[280px] w-full  md:min-w-[380px] max-w-[380px] flex-1 relative">
                      <span className="absolute bg-[#33658A] top-[20px] text-white py-[2px] rounded-r-[20px] z-10 px-[10px] flex items-center text-lato text-[12px]">
                        {course.status}
                      </span>
                      <img
                        src={Thumbnail || course.thumbnail}
                        alt=""
                        className="h-full w-full rounded-l-[10px] object-cover"
                      />
                    </div>
                    <div className="flex-1 md:flex-2 w-full md:min-w-[580px] md:max-w-[580px] md:p-[20px] pt-[10px]">
                      <div className="px-[10px] md:p-0">
                        <p className="font-raleway font-[700] text-[20px]">
                          {course.title}
                        </p>
                      </div>
                      <div className=" my-[5px] md:mt-[20px] px-[10px] md:p-0">
                        <p className="font-lato text-[14px] md:text-[18px] font-[400] text-[#333333]">
                          {course.meta}
                        </p>
                      </div>
                      <div className="md:mt-[30px] w-full md:w-fit ">
                        <Link to={`/courses/${course.slug}`} className="">
                          <p className="h-full w-full md:w-fit  bg-[#33658A] text-white px-[20px] py-[15px] md:py-[10px] rounded-b-[10px] md:rounded-[12px] text-center ">
                            {" "}
                            View course
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="my-[20px]">
         {courses?.length > 3 && (
           <button
           className="border border-[#F6C042] text-[#F6C042] font-[400] text-[18px] px-[20px] py-[10px] font-lato rounded-[12px] cursor-pointer"
           onClick={(e) => setMore(more + 3)}
         >
           Load More
         </button>
         )}
        </div>
      </div>
      <div className="mt-[100px] flex flex-col justify-center items-center">
        <div className="mb-[30px] md:mb-[50px]">
          <p className="font-[800] font-raleway text-[20px]  md:text-[32px] text-start">
            Frequently Asked Questions
          </p>
        </div>
        {faqArr.slice(0, 5).map((item, i) => (
          <div
            className="my-[10px] w-full md:w-[960px] "
            onClick={() => toggle(i)}
            key={item.question}
          >
            <div className=" border flex gap-3 items-center justify-between p-[10px] md:p-[20px]  cursor-pointer ">
              <p className="font-[400]  font-lato text-[16px] md:text-[20px]">
                {item.question}
              </p>
              <BsCaretDown />
            </div>
            <div
              className={`${
                faq === i ? "h-full " : "h-0 p-0"
              } overflow-hidden transition-all break-words`}
            >
              <p className="">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePageComponent;
