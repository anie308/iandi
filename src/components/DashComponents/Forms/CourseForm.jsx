import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import Tiptap from "./Tiptap";
import Select from "react-select";

import { toast } from "react-toastify";

function CourseForm({ initialCourse, html, onSubmit }) {
  const month = [
    {
      label: " August",
      value: 'August'
    },
    {
      value: 'September',
      label: "September",
    },
    {
      label: "October",
    },
    {
      label: "November",
    },
    {
      label: "December",
    },
  ];
  const status = [
    {
      value: "Coming Soon",
      label: "Coming Soon",
    },
    {
      value: "Available",
      label: "Available",
    },
  ];
  
  const [avail, setAvail] = useState("");
  const [monthSelect, setMonthselect] = useState("");
  const defaultCourse = {
    title: "",
    thumbnail: "",
    courseDesc: html,
    availMonth: "",
    courseStatus: "",
    courseHighlight: "",
  };
  const [courseInfo, setCourseInfo] = useState({ ...defaultCourse });

  const [selectedThumbnailURL, setSelectedThumbnailURL] = useState("");

  useEffect(() => {
    setCourseInfo({ ...initialCourse });
  }, [initialCourse]);

  const handleOption = (selectedOption) => {
    setAvail(selectedOption) 
  }
  const handleMonth = (selectedOption1) => {
    setMonthselect(selectedOption1) 
  }
  const handleChange = ({ target }) => {
    const { value, name } = target;

    if (name === "thumbnail") {
      const file = target.files[0];

      if (!file.type?.includes("image")) {
        return toast.warn("This is not an image!");
      }

      setCourseInfo({ ...courseInfo, thumbnail: file, courseStatus : avail });
      return setSelectedThumbnailURL(URL.createObjectURL(file));
    }

    const newCourse = { ...courseInfo, [name]: value };

    setCourseInfo({ ...newCourse });

    localStorage.setItem("course", JSON.stringify(newCourse));
    console.log(newCourse);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      title,
      courseDesc,
      courseStatus,
      courseHighlight,
    } = courseInfo;

    //month availability of course is not a required field bcos it depends on the  courseStaus
    if (!title.trim()) return toast.warn( "Title is required!");
    if (!courseDesc.trim())
      return toast.warn( "Course Description is required!");

    if (!courseHighlight.trim())
      return toast.warn( "Course HighLight is required!");
    if (!courseStatus.trim())
      return toast.warn( "Course Status is required!");


    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, " ")
      .split(" ")
      .filter((item) => item.trim())
      .join("-");

    const formData = new FormData();

    const finalCourse = { ...courseInfo, slug };
    for (let key in finalCourse) {
      formData.append(key, finalCourse[key]);
    }

    onSubmit(formData);
    
  };


  const {
    title,
    courseDesc,
    availMonth,
    courseStatus,
    courseHighlight,
  } = courseInfo;
  return (
    <div className="px-[15px] py-[30px] ">
      <form action="" className="w-full" onSubmit={handleSubmit}>
        <div className="flex items-center w-full justify-between p-[15px]">
          <button
            type="reset"
            className="w-[125px] h-[40px] text-[#33658A] border border-[#33658A] bg-white rounded-[5px] flex items-center justify-center space-x-2"
          >
            <FaTimes />
            <p className="font-lato text-[14px] font-[400]">Cancel</p>
          </button>
          <button
            type="submit"
            className="w-[125px] h-[40px] bg-[#33658A] text-white rounded-[5px] flex items-center justify-center space-x-2"
          >
            <AiOutlineCheck />
            <p className="font-lato text-[14px] font-[400]">Save</p>
          </button>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between mt-[20px] px-[15px] gap-4">
          <div className="flex-1 md:flex-2">
            <div>
              <label
                htmlFor="title"
                className="font-[700] font-raleway text-[18px]"
              >
                {" "}
                Course Title
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                className="h-[38px] bg-[#FAFAFA] w-full mt-[5px] rounded-[3px] outline-none border px-[5px] font-lato text-[#333333] text-[16px] font-[400]"
              />
            </div>

            <div className="py-[20px]">
              <p className="font-[700] font-raleway text-[18px] mb-[5px]">
                Course Description
              </p>
              <div className="w-full prose">
                <Tiptap />
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <p className="font-[700] font-raleway text-[18px]">Course Status</p>
            <div className="flex items-center justify-between gap-4 mt-[5px]">
              <div className="flex-1">
                <Select
                  options={status}
                  isClearable={false}
                  isSearchable={false}
                   onInputChange={handleOption}
                  name="courseStatus"
                  value={courseStatus}
                  // className='w-full'
                  defaultValue={status[0]}
                />
              </div>
              {avail === "Coming Soon" && (
                 <div className="flex-1">
                 <Select
                   options={month}
                   isClearable={false}
                   isSearchable={false}
                    onInputChange={handleMonth}
                   name="availMonth"
                   value={availMonth}
                   className='w-full'
                   defaultValue={month[0]}
                 />
               </div>
              )}
            </div>
            <div className="mt-[20px]">
              <p className="font-[700] font-raleway text-[18px]">
                Course Image
              </p>
              <div>
                <div className="mt-[10px]">
                  <input
                    type="file"
                    name="thumbnail"
                    hidden
                    id="thumbnail"
                    onChange={handleChange}
                  />
                  <label htmlFor="thumbnail" className="cursor-pointer">
                    {selectedThumbnailURL ? (
                      <img
                        src={selectedThumbnailURL}
                        alt=""
                        className="w-[160px] h-[100px] shadow"
                      />
                    ) : (
                      <div className="border-[2px] rounded-[5px] border-dashed w-[160px] h-[100px]   border-[#33658A] flex flex-col justify-center items-center">
                        <span className="text-[16px] font-lato font-[400]">
                          Select Thumbnail
                        </span>
                        <span className="text-[12px] font-lato font-[400]">
                          Recommended size
                        </span>
                        <span className="text-[12px] font-lato font-[400]">
                          1280*720
                        </span>
                      </div>
                    )}
                  </label>
                </div>
                <div className="mt-[20px]">
                  <p className="font-[700] font-raleway text-[18px]">
                    Course Highlight
                  </p>
                  <div className="w-full prose h-[400px]">
                <Tiptap />
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
