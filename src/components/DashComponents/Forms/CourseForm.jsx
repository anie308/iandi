import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";
import Select from "react-select";
import { toast } from "react-toastify";

function CourseForm({ initialCourse, html, onSubmit }) {
  const month = [
    {
      label: " August",
    },
    {
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
      value: false,
      label: "Coming Soon",
    },
    {
      value: true,
      label: "Available",
    },
  ];

  const [title, setTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseStatus, setCourseStatus] = useState("");
  const [courseHighlight, setCourseHighlight] = useState("");
  const [avail, setAvail] = useState("");
  const [selectedThumbnailURL, setSelectedThumbnailURL] = useState("");
  const [thumbnail, setThumbnail] = useState('');

  const handleChange = ({ target }) => {
    const { name } = target;
    if (name === "thumbnail") {
      const file = target.files[0];
      if (!file.type?.includes("image")) {
        return toast.warn("This is not an image!");
      } else{
        setSelectedThumbnailURL(URL.createObjectURL(file))
        setThumbnail(file)



      }

      // return (
              
      // )

    }

    console.log(thumbnail)


  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, " ")
      .split(" ")
      .filter((item) => item.trim())
      .join("-");

    const newCourse = {
      title,
      thumbnail ,
      courseDesc,
      courseHighlight,
      courseStatus,
      avail,
      slug,
    };

    onSubmit(newCourse);
    console.log(thumbnail)
  };

  return (
    <div className="px-[15px] py-[30px] ">
      <form action="" className="w-full" onSubmit={handleSubmit}>
        <div className="flex items-center w-full justify-between p-[15px]">
          <button
            className="w-[125px] h-[40px] text-[#33658A] border border-[#33658A] bg-white rounded-[5px] flex items-center justify-center space-x-2"
            // onClick={handleCancel}
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
        <div className="w-full grid grid-cols-2 md:flex-row justify-between mt-[20px] px-[15px] gap-4">
          <div className=" ">
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
                onChange={(e) => setTitle(e.target.value)}
                className="h-[38px] bg-[#FAFAFA] w-full mt-[5px] rounded-[3px] outline-none border px-[5px] font-lato text-[#333333] text-[16px] font-[400]"
              />
            </div>

            <div className="py-[20px]">
              <p className="font-[700] font-raleway text-[18px] mb-[5px]">
                Course Description
              </p>
              <div className="w-full prose">
                <Editor
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  textareaName="courseDesc"
                  initialValue=""
                  onEditorChange={(newText) => setCourseDesc(newText)}
                />
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
                  name="courseStatus"
                  onChange={(e) => setCourseStatus(e.label)}
                  // className='w-full'
                  defaultValue={status[0].value}
                />
              </div>
              {/* {avail.value === false && ( */}
              <div className="flex-1">
                <Select
                  options={month}
                  isClearable={false}
                  isSearchable={false}
                  name="availMonth"
                  onChange={(e) => setAvail(e.label)}
                  className="w-full"
                  defaultValue={month[0]}
                />
              </div>
              {/* )} */}
            </div>
            <div className="mt-[20px]">
              <p className="font-[700] font-raleway text-[18px]">
                Course Image
              </p>
              <div>
                <div className="mt-[10px]  w-[160px] h-[100px]   ">
                  <input
                    type="file"
                    name="thumbnail"
                    hidden
                    id="thumbnail"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                  />
                  <label
                    htmlFor="thumbnail"
                    className="cursor-pointer  w-[160px] h-[100px]   "
                  >
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
                  <div className="prose h-[400px]">
                    <Editor
                      init={{
                        height: 200,
                        menubar: false,
                        plugins: [
                          "advlist autolink lists link image charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste code help wordcount",
                        ],
                        toolbar:
                          "undo redo | formatselect | " +
                          "bold italic backcolor | alignleft aligncenter " +
                          "alignright alignjustify | bullist numlist outdent indent | " +
                          "removeformat | help",
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                      }}
                      name="courseHighlight"
                      initialValue=""
                      onEditorChange={(newText) => setCourseHighlight(newText)}
                    />
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
