import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Thumbnail from "../../assets/thumbnail.png";
import { IoTimeOutline } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";
import { default as api } from "../../services/apiSlice";

function CourseDetailSection() {
  const { data, error, isFetching, isSuccess } = api.useCoursesQuery();

  const courses = data?.courses;
  console.log(courses);

  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    let course = courses.find((course) => course.slug === slug);

    if (course) {
      setCourse(course);
    }
  }, [courses, slug]);

  return (
    <div className="mt-[30px] md:mt-[60px]">
      {isFetching && <div>Loading</div>}
      {isSuccess && (
        <div>
          {course ? (
          <div className="md:mx-[100px]  flex flex-col md:flex-row  justify-around">
          <div className="mx-[15px] ">
            <div className="w-ful flex flex-col items-left  my-[10px] ">
              <p className="font-montserrat text-[14px] md:text-[18px] font-[500] text-[#33658A]">
                DEVELOPMENT COURSE
              </p>
              <p className="font-raleway text-[28px] md:text-[40px] font-[800] text-[#232C38]">
                {course.title}
              </p>
            </div>
            <div  className="flex flex-col md:flex-row  justify-around">
            <div>
              <div className="w-full lg:w-[648px] h-[200px] lg:h-[400px] border rounded-[15px]">
                <img
                  src={Thumbnail || course.thumbnail}
                  alt=""
                  className="h-full w-full object-cover rounded-t-[15px] md:rounded-[15px]"
                />
              </div>
              <div className="mt-[15px] break-words">
                Learn how to use the BASICS model to assess and take charge
                of your physical and mental{" "}
                <br className="hidden md:block" /> well-being.
              </div>
              <div className="mt-[10px]">
                <p className="font-lato text-[25px] font-[800] py-[10px]">
                  Lessons in this course
                </p>
                <div>
                  <ol>
                    <li>1st row of description</li>
                    <li>2nd row of description</li>
                    <li>3rd row of description (max)</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="md:bg-[#EBEEF5] md:ml-[100px] rounded-[15px] px-[0px] md:px-[15px] py-[15px] md:py-[25px] w-full md:min-w-[360px] flex flex-col md:flex-col-reverse justify-start items-start h-full">
              <div className="w-full">
                <div className="hidden md:block  text-[#232C38] md:pb-[50px] md:border-b border-[#D4D4D4]">
                  <div>
                    <div>
                      <div className="text-center font-raleway hidden md:block font-[700] text-[20px]">
                        {course.courseStatus === "available" ? (
                          <span>
                            Ready to get started? <br /> Get access to all
                            courses for free until 30 August!
                          </span>
                        ) : (
                          <span>
                            Course is coming soon in August. Get notified
                            when it’s available!
                          </span>
                        )}
                      </div>
                      <div className="mt-[20px]">
                        <Link
                          to={`${
                            course.courseStatus === "available"
                              ? "/course/register"
                              : "/course/waitlist"
                          }`}
                        >
                          <p
                            className={`${
                              course.courseStatus === "available"
                                ? " bg-[#33658A] text-white "
                                : "border border-[#4395C1] text-[#4395C1]"
                            } w-full  py-[10px]  rounded-[10px] text-center font-[lato] text-[18px]`}
                          >
                            {course.courseStatus === "available"
                              ? "Register Now"
                              : "Join Waitlist"}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-[15px] md:m-0 flex flex-col md:flex-row items-start md:items-center py-[15px] space-y-4 md:space-y-0 md:space-x-2 w-full">
                    <div className="flex items-center space-x-1 border shadow p-[8px] rounded-[10px] w-fit bg-white">
                      <IoTimeOutline className="text-[25px]" />
                      <p className=" font-raleway font-[700]  text-[15px]">
                        Flexible deadlines
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 border shadow p-[8px] rounded-[10px] w-fit bg-white">
                      <BsLaptop className="text-[25px]" />{" "}
                      <p className=" font-raleway font-[700]  text-[15px]">
                        100% online
                      </p>
                    </div>
                  </div>
                  <div className=" px-[15px] md:m-0">
                    <div className="my-[20px] w-full">
                      <p className="font-[700] text-[16px] md:text-[20px] font-raleway">
                        What you will learn
                      </p>
                      <p className="font-[500] font-lato text-[14px] md:text-[18px] mt-[5px]">
                        Description (1 - 3 rows max)
                      </p>
                    </div>
                    <div className="mt-[25px]">
                      <p className="font-[700] text-[16px] md:text-[20px] font-raleway">
                        Who should take this course?
                      </p>
                      <p className="font-[500] font-lato text-[14px] md:text-[18px] mt-[5px]">
                        Description (1 - 3 rows max)
                      </p>
                    </div>
                    <div className="hidden md:block my-[25px]">
                      <p className="font-[700] text-[16px] md:text-[20px] font-raleway">
                        Bonus
                      </p>
                      <p className="font-[500] font-lato text-[14px] md:text-[18px] mt-[5px]">
                        Complimentary{" "}
                        <span className="text-[#4395C1]">
                          {" "}
                          1 to 1 Support Session
                        </span>{" "}
                        upon completion of this course
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#EBEEF5] w-full  block md:hidden mt-[70px] text-[#232C38] md:pb-[50px] md:border-b border-[#D4D4D4] py-[30px] px-[15px]">
                  <div className="w-full flex items-center">
                    <div className="w-full">
                      <div className="text-center w-full">
                        {course.courseStatus === "available" ? (
                          <div className="w-full">
                            <div className="text-[18px] font-[800] font-raleway">
                              {" "}
                              Ready to get started?{" "}
                            </div>
                            <span className="font-[400] text-[15px] font-lato text-center">
                              Get access to all courses for free until 30
                              August!
                            </span>
                          </div>
                        ) : (
                          <div>
                            <div className="text-[18px] font-[800] font-raleway">
                              Course is coming soon in {course?.availMonth}
                            </div>
                            <span className="font-[400] text-[15px] font-lato text-center">
                              Get notified when it’s available!
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="mt-[20px]">
                        <Link
                          to={`${
                            course.courseStatus === "available"
                              ? "/course/register"
                              : "/course/waitlist"
                          }`}
                        >
                          <p
                            className={`${
                              course.courseStatus === "available"
                                ? " bg-[#33658A] text-white "
                                : "border border-[#4395C1] text-[#4395C1]"
                            } w-full  py-[10px]  rounded-[10px] text-center font-[lato] text-[18px]`}
                          >
                            {course.courseStatus === "available"
                              ? "Register Now"
                              : "Join Waitlist"}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
          </div>
        </div>
          ) : (
            <div className="h-full font-[700] font-raleway text-[25px] w-full text-center">
              Course Not Found!
            </div>
          )}
        </div>
      )}

      {error && <div>Something went wrong</div>}
    </div>
  );
}

export default CourseDetailSection;
