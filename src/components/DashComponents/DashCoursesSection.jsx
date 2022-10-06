import React, {useState, useEffect} from "react";
import Thumbnail from "../../assets/thumbnail.png";
import { AiOutlineEye, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { Link} from "react-router-dom";
import { default as api } from "../../services/apiSlice";
import { useLocation } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'



function DashCourses() {

 
  
  const location = useLocation();
  const name = location.pathname.split("/")[2];
  const [deleteCourse] = api.useDeleteCourseMutation()
  const { data, error, isLoading, isSuccess } = api.useCoursesQuery();
  const courses = data?.courses;
  const active = courses?.filter(e => e.courseStatus === 'Available')
  const upcoming = courses?.filter(e => e.courseStatus === 'Coming Soon')


  const options = [
    {
      id: 1,
      name: "All Courses",
      value: courses,
    },
    {
      id: 2,
      name: "Available",
      value: active,
    },
    {
      id: 3,
      name: "Coming Soon",
      value: upcoming,
    },
  ]
  const [dropdown, setDropdown] = useState(false)
  const [selected, setSelected] = useState(options[0]);



  const value = selected.value

  function handleDelete(id){
    deleteCourse(id)
  }

  return (
    <div className="px-[15px] ">
      <div className="flex items-center w-full justify-between my-[20px]">
        <div>
        <p className='capitalize font-[800] text-[32px] font-raleway'>{name}</p>
        </div>
        <div className='w-[445px] h-[40px]'>
          <form action="" className='bg-[#FAFAFA] rounded-[5px] p-[8px_10px] h-full w-full flex items-center justify-between'>
            <input type="text" className='bg-transparent w-full text-[#7D7D7D] placeholder:text-[#7D7D7D] outline-none border-none' placeholder='Search course title' />
            <button type='submit'><FaSearch className='text-[#7D7D7D] text-[18px]'/></button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <div className="bg-[#FAFAFA] w-[200px] px-[10px] h-[40px] flex items-center justify-between cursor-pointer rounded-[5px]" onClick={(e)=> setDropdown(!dropdown)}>
              <p className='font-lato font-[400]'>{selected.name}</p>
              <BiChevronDown className='text-[25px]'/>
            </div>
            {
              dropdown && (
                  <div className="absolute bg-[#FAFAFA] w-[200px] mt-[10px] rounded-[5px]">
                  {options.map((option, index)=> (
                      <div className="h-[40px] p-[10px] hover:bg-gray-100 cursor-pointer font-lato font-[400]"
                      // key={option.value}
                      onClick={(e) => {
                        setDropdown(!dropdown);
                        setSelected(option);
                      }}
                      >{option.name}</div>
                  ))}
                </div>
              )
            }
          </div>
          <Link to='/dashboard/create-course'>
          <div className="flex items-center text-white bg-[#33658A] px-[10px] w-[125px] h-[40px] rounded-[5px] space-x-2"><AiOutlinePlus className="text-white "/> <p className='font-lato text-[14px] font-[400]'>New Course</p></div></Link>
        </div>
      </div>
      <div className='mt-[20px]'>
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
          <div>
            {courses.length === 0 ? (
              <div className="h-[125px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center">
                {" "}
                No Courses Yet
              </div>
            ) : (
              <div className="flex  gap-5 flex-col w-full">
                {value?.map(({ id, slug, title, meta, courseStatus, availMonth, thumbnail }) => (
                  <div
                    className="flex  shadow rounded-[5px] p-[10px] bg-[#FAFAFA]"
                    key={id}
                  >
                    <div>
                      <img
                        src={thumbnail}
                        alt=""
                        className="h-[100px] md:h-[100px]  md:min-w-[160px] w-full  aspect-video"
                      />
                    </div>
                    <div className="flex pl-[10px] w-full">
                      <div className="flex flex-col justify-between h-full py-[5px] grow">
                        <p className={`${courseStatus === 'Coming Soon' ? 'bg-[#FBDF8B]': 'bg-[#94DBEF]'}  p-[5px]  w-fit rounded-[8px] text-[12px] font-montserrat font-[400] uppercase`}>
                          {courseStatus} {courseStatus === 'Coming Soon' ? <span>in {availMonth}</span> : ''}
                        </p>
                        <p className="font-[700] text-[18px] font-raleway">
                          {title}
                        </p>
                        <p className="font-[400] text-[14px] font-lato">
                          {meta}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1  flex space-x-2">
                      <div className="border border-[#33658A] p-[5px] h-fit rounded-[5px]">
                        <Link to={`/dashboard/course/${slug}`}>
                          <AiOutlineEye className="text-[#33658A]" />
                        </Link>
                      </div>
                      <div className="border border-[#33658A] p-[5px] h-fit rounded-[5px]">
                        <Link to={`/dashboard/update-course/${slug}`}>
                          <MdEdit className="text-[#33658A]" />
                        </Link>
                      </div>
                      <div className="border border-[#DB162F] p-[5px] h-fit rounded-[5px] cursor-pointer" data-id={id}  onClick={()=> handleDelete(id)}>
                        
                          <AiFillDelete className="text-[#DB162F]"  />
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashCourses;
