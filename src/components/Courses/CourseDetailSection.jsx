import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { courseDetails } from "../../data";
import Thumbnail from "../../assets/thumbnail.png";
import {IoTimeOutline} from 'react-icons/io5'
import {BsLaptop} from 'react-icons/bs'

function CourseDetailSection() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    let course = courseDetails.find((course) => course.slug === slug);

    if (course) {
      setCourse(course);
    }
  }, [slug]);

  const available = true;

  
  return (
    <div className="">
      {course ? (
        <div className="flex flex-col  lg:ml-[80px] mt-[60px]">
          <div className="w-ful flex flex-col items-left my-[10px] pl-[20px]">
            <p className="font-montserrat text-[14px] md:text-[18px] font-[500] text-[#33658A]">
              DEVELOPMENT COURSE
            </p>
            <p className="font-raleway text-[28px] md:text-[40px] font-[800] text-[#232C38]">
              {course.name}
            </p>
          </div>
          <div className="flex flex-col  md:flex-row rounded-[20px] ">
            <div className="flex-1 px-[20px] ">
              <div className="w-full lg:w-[648px] h-[200px] lg:h-[400px] border rounded-[15px]">
                <img
                  src={Thumbnail}
                  alt=""
                  className="h-full w-full object-cover rounded-t-[15px] md:rounded-[15px]"
                />
              </div>
              <div className="w-full md:w-[648px] px-[10px] md:p-0 border border-t-0 border-b-0 md:border-none">
                <div className="pt-[20px]">
                  <p className="font-lato text-[15px] md:text-[20px] font-[500] ">
                    {course.meta}
                  </p>
                </div>
                <div className="mt-[20px]">
                  <p className="font-[raleway] font-[800] text-[18px] md:text-[24px]">
                    Lessons in this course
                  </p>
                  <p className="mt-[15px] md:mt-[20px]">{course.meta}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 ">
              <div className="w-full md:w-[450px] flex flex-col-reverse md:flex-col">
                <div className="md:pb-[30px] md:border-b border-[#D4D4D4] w-full mt-[100px] bg-[#EBEEF5] md:bg-white px-[20px] md:mt-0 p-[35px] md:pl-0 md:pt-0 md:pr-0">
                  <div>
                    <p className="  text-[#232C38]">
                    {
                      available ? (
                        <div>
                        <span className=" font-raleway hidden md:block font-[700] text-[20px]">
                        Ready to get started? Get access to all courses for free until 30 August!
                      </span>
                      <span className="block md:hidden">
                      <p className=" font-raleway font-[800] text-[20px] flex flex-col items- text-center">
                      Ready to get started?
                      </p>
                      <p className=" font-lato font-[400] text-[15px] flex flex-col items- text-center">
                      Get access to all courses for free until 30 August!
                      </p>
                      </span>
                      </div>
                      ) : (
                        <div>
                          <span className=" font-raleway hidden md:block font-[700] text-[20px]">
                            Course is coming soon in August. Get notified when it’s available!
                        </span>
                        <span className="block md:hidden">
                        <p className=" font-raleway font-[800] text-[20px] flex flex-col items- text-center">
                        Course is coming soon in August
                        </p>
                        <p className=" font-lato font-[400] text-[15px] flex flex-col items- text-center">
                        Get notified when it’s available!
                        </p>
                        </span>
                        </div>
                      )
                    }

                    
                    </p>
                  </div>
                  <div className="w-full mt-[20px]">
                    <Link to={`${available? "/course/register" : "/course/waitlist"}`} className="">
                      <p
                        className={`${available? " bg-[#33658A] text-white " :"border border-[#4395C1] text-[#4395C1]"} w-full  py-[15px]  rounded-[10px] text-center font-[lato] text-[18px]`}
                      >
                        {available? 'Register Now' : 'Join Waitlist'}
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="py-[30px] px-[10px] mx-[20px] md:p-0 border border-t-0 rounded-b-[15px] md:border-none">
                  <div>
                    <div className="flex flex-col md:flex-row items-start md:items-center py-[15px] space-y-4 md:space-y-0 md:space-x-4">
                      <div className="flex items-center space-x-1 border shadow p-[8px] rounded-[10px]">
                        <IoTimeOutline className="text-[25px]"/> <p className=" font-raleway font-[700]  text-[18px]">Flexible deadlines</p>
                      </div>
                      <div className="flex items-center space-x-1 border shadow p-[8px] rounded-[10px]">
                        <BsLaptop className="text-[25px]"/> <p className=" font-raleway font-[700]  text-[18px]">100% online</p>
                      </div>
                      
                    </div>
                  </div>
                  <div>
                    <p className="font-[700] text-[16px] md:text-[20px] font-raleway">What you will learn</p>
                    <p className="font-[500] font-lato text-[14px] md:text-[18px] mt-[5px]">Description (1 - 3 rows max)</p>
                  </div>
                  <div className="mt-[25px]">
                    <p className="font-[700] text-[16px] md:text-[20px] font-raleway">Who should take this course?</p>
                    <p className="font-[500] font-lato text-[14px] md:text-[18px] mt-[5px]">Description (1 - 3 rows max)</p>
                  </div>
                  <div className="hidden md:block mt-[25px]">
                    <p className="font-[700] text-[16px] md:text-[20px] font-raleway">Bonus</p>
                    <p className="font-[500] font-lato text-[14px] md:text-[18px] mt-[5px]">Complimentary <span className="text-[#4395C1]"> 1 to 1 Support Session</span> upon completion of this course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full font-[700] font-raleway text-[25px] w-full text-center">
          Hello Motherfucker!!
        </div>
      )}
    </div>
  );
}

export default CourseDetailSection;
