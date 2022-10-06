import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";
import Select from "react-select";
import { toast } from "react-toastify";
// const defaultCourse = {
//   title: "",
//   thumbnail: "",
//   courseDesc: "",
//   courseHighlight: "",
//   avail: "",
//   courseStatus: "",


// }
function BiteForm({ initialCourse, html, onSubmit }) {
  // const [courseInfo, setCourseInfo] = useState({...defaultCourse})
 
  

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 const [estTime, setEstTime] = useState("");
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
      content,
      estTime,
      slug,
    };

    if(!title.trim()) return toast.warn('Title is Missing')
    if(!content.trim()) return toast.warn('Content is Missing')
    if(!estTime.trim()) return toast.warn('Estimated Time is Missing')

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
                Bite-sized Post Title
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
                Content
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
                  textareaName="content"
                  initialValue=""
                  onEditorChange={(newText) => setContent(newText)}
                />
              </div>
            </div>
          </div>
          <div className=" ">
            <p className="font-[700] font-raleway text-[18px]">Estimated Reading Time</p>
            <div className="flex items-center justify-between gap-4 mt-[5px]">
              <div className="flex-1 flex items-center space-x-3">
                  <div>               <input type="text" maxLength={1} onChange={(e) => setEstTime(e.target.value)} className="h-[36px] w-[36px] border rounded-[3px] bg-[#FAFAFA] items-center text-center outline-none" /></div>
                  <div className="font-lato text-[14px] font-[400] ">minutes</div>
              </div>
            
            </div>
            <div className="mt-[20px]">
              <p className="font-[700] font-raleway text-[18px]">
                Bite-sized Post Image
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
               
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BiteForm;
