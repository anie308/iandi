import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";
import Select from "react-select";
import { toast } from "react-toastify";

function SessionForm({ initialCourse, html, onSubmit }) {
 
  const durationOption = [
    {
      label: 10,
    },
    {
      label: 15,
    },
    {
      label: 30,
    },
    {
      label: 60,
    },
    {
      label: 120,
    },
  ];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [sessionHighlight, setSessionHighlight] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [speakerJobTitle, setSpeakerJobTitle] = useState("");
  const [speakerDesc, setSpeakerDesc] = useState("");
  const [speakerInsta, setSpeakerInsta] = useState("");
  const [speakerLinkedIn, setSpeakerLinkedIn] = useState("");
  const [selectedThumbnailURL, setSelectedThumbnailURL] = useState("");
  const [thumbnail, setThumbnail] = useState();

  

  const handleChange = ({ target }) => {
    const { name } = target;
    if (name === "thumbnail") {
      const file = target.files[0];
      if (!file.type?.includes("image")) {
        return toast.warn("This is not an image!");
      } 
      return ( 
        setSelectedThumbnailURL(URL.createObjectURL(file)),
        console.log(file),
        setThumbnail(file)

      )



    }



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
      description,
      date,
      sessionHighlight,
      time,
      duration,
      speakerDesc,
      speakerInsta,
      speakerJobTitle,
      speakerLinkedIn,
      speakerName,
      slug,
    };

    if(!title.trim()) return toast.warn('Title is Missing')
    // if(!courseDesc.trim()) return toast.warn('Course Description is Missing')
    // if(!courseStatus.trim()) return toast.warn('Course Status is Missing')
    // if(!courseHighlight.trim()) return toast.warn('Course Highlight is Missing')

    const formData = new FormData()

    formData.append('thumbnail', thumbnail)
    const finalCourse = {...newCourse}

    for (let key in finalCourse){
      formData.append(key, finalCourse[key])
    }

    

    onSubmit(formData);
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
        <div className="w-full grid grid-cols-3 md:flex-row justify-between mt-[20px] px-[15px] gap-4">
          <div className="col-span-2 ">
            <div>
              <label
                htmlFor="title"
                className="font-[700] font-raleway text-[18px]"
              >
                {" "}
                Session Title
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
                Session Description
              </p>
              <div className="w-full prose">
                <Editor
                  init={{
                    height: 400,
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
                  onEditorChange={(newText) => setDescription(newText)}
                />
              </div>
            </div>
          </div>
          <div className=" ">
            <p className="font-[700] font-raleway text-[18px]">Session Date & Time</p>
            <div className="flex flex-col items-start justify-between gap-4 mt-[5px]">
              <div className="mb-[10px]">
               <input type="date" className="border p-[5px_18px] rounded-[5px]" onChange={(e) => setDate(e.target.value)}/>
              </div>
              
              <div className="flex items-center space-x-5 w-full">
               <div className="flex-1 ">
               <input type="time" className="border p-[6px_10px] rounded-[5px] w-full" onChange={(e) => setTime(e.target.value)} />
               </div>
               <div className="flex-1">
               <Select
                  options={durationOption}
                  isClearable={false}
                  isSearchable={false}
                  name="courseStatus"
                  onChange={(e) => setDuration(e.label)}
                  // className='w-full'
                  defaultValue={durationOption[0].value}
                />
               </div>
              </div>
           
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
                    onChange={handleChange}
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
                <p className="font-[700] font-raleway mt-[40px] text-[18px]">
                    Speaker
                  </p>
                <div className="mt-[10px]">
                <p className="font-[400] font-raleway text-[14px]">
                    NAME
                  </p>
                  <div>
                  <input
                type="text"
                name="name"
                onChange={(e) => setSpeakerName(e.target.value)}
                className="h-[38px] bg-[#FAFAFA] w-full mt-[5px] rounded-[3px] outline-none border px-[5px] font-lato text-[#333333] text-[16px] font-[400]"
              />
                  </div>
                </div>
                <div className="mt-[10px]">
                <p className="font-[400] font-raleway text-[14px]">
                    JOB TITLE
                  </p>
                  <div>
                  <input
                type="text"
                name="jobtitle"
                onChange={(e) => setSpeakerJobTitle(e.target.value)}
                className="h-[38px] bg-[#FAFAFA] w-full mt-[5px] rounded-[3px] outline-none border px-[5px] font-lato text-[#333333] text-[16px] font-[400]"
              />
                  </div>
                </div>
                <div className="mt-[10px]">
                <p className="font-[400] font-raleway text-[14px]">
                DESCRIPTION
                  </p>
                  <div>
                  <textarea
                type="text"
                name="description"
                onChange={(e) => setSpeakerDesc(e.target.value)}
                className=" bg-[#FAFAFA] w-full mt-[5px] rounded-[3px] outline-none border px-[5px] font-lato text-[#333333] text-[16px] font-[400] h-[82px]"
              />
                  </div>
                </div>

                <div className="grid grid-cols-2 w-full gap-3 mt-[10px]">
                <div className="mt-[10px]">
                <p className="font-[400] font-raleway text-[14px]">
                LINKEDIN
                  </p>
                  <div>
                  <input
                type="text"
                name="description"
                onChange={(e) => setSpeakerLinkedIn(e.target.value)}
                className="h-[38px] bg-[#FAFAFA] w-full mt-[5px] rounded-[3px] outline-none border px-[5px] font-lato text-[#333333] text-[16px] font-[400] "
              />
                  </div>
                </div>
                <div className="mt-[10px]">
                <p className="font-[400] font-raleway text-[14px]">
                INSTAGRAM
                  </p>
                  <div>
                  <input
                type="text"
                name="description"
                onChange={(e) => setSpeakerInsta(e.target.value)}
                className="h-[38px] bg-[#FAFAFA] w-full mt-[5px] rounded-[3px] outline-none border px-[5px] font-lato text-[#333333] text-[16px] font-[400] "
              />
                  </div>
                </div>
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
                      onEditorChange={(newText) => setSessionHighlight(newText)}
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

export default SessionForm;
