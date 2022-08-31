import React, { useEffect, useState } from "react";
import { mdRules } from "../../../data";
import {toast} from 'react-toastify'

const defaultBite = {
  title: "",
  thumbnail: "",
  content: "",
};



function BiteForm({initialBite, onSubmit}) {

  const [biteInfo, setBiteInfo] = useState({ ...defaultBite });
  const [selectedThumbnailURL, setSelectedThumbnailURL] = useState("");

  useEffect(() => {
    setBiteInfo({...initialBite});
  }, [initialBite]);

  const handleChange = ({ target }) => {
    const { value, name } = target;

    if (name === "thumbnail") {
      const file = target.files[0];

      if (!file.type?.includes("image")) {
        return toast.warn( "This is not an image!");
      }

      setBiteInfo({ ...biteInfo, thumbnail: file });
      return setSelectedThumbnailURL(URL.createObjectURL(file));
    }
    
    const newPost = { ...biteInfo, [name]: value };

    setBiteInfo({ ...newPost });

    localStorage.setItem("bite", JSON.stringify(newPost));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, content } = biteInfo;

    if (!title.trim()) return toast.warn( "Title is required!");
    if (!content.trim())
      return toast.warn( "Content is required!");

    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, " ")
      .split(" ")
      .filter((item) => item.trim())
      .join("-");

    const formData = new FormData();

    const finalBite = { ...biteInfo, slug };
    for (let key in finalBite) {
      formData.append(key, finalBite[key]);
    }

    onSubmit(formData);
    // await addBite()
  };

  const { title, content } = biteInfo;

  return (
    <div></div>
  );
}

export default BiteForm;


{/* <div className="flex flex-col md:flex-row gap-4 px-[10px] md:px-[20px] my-[40px] ">
<div className="flex-2 bg-gray-200  p-[20px] rounded-[5px]">
  <div>
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-[18px] md:text-[25px] font-raleway font-[600]"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id=""
            value={title}
            onChange={handleChange}
            className="h-[45px] rounded-[5px] px-[10px] outline-none mt-[2px]"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-[18px] md:text-[25px] font-raleway font-[600]"
          >
            Content
          </label>
          <textarea
            name="content"
            value={content}
            onChange={handleChange}
            id=""
            className="h-[250px] rounded-[5px] p-[10px] outline-none mt-[2px]"
          />
        </div>

        <div className="flex items-center w-full justify-center md:justify-end space-x-3 mt-[100px]">
          <button
            type="submit"
            className="text-[16px] md:text-[20px] font-[600] font-raleway px-[30px] py-[5px] bg-[#33658A] rounded-[5px] text-white"
          >
            Create
          </button>
          <button
            type="reset"
            className="text-[16px] md:text-[20px] font-[600] font-raleway px-[30px] py-[5px] border border-[#33658A] rounded-[5px] text-[#33658A]"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
<div className="flex-1  h-full p-[20px] bg-gray-200">
  <div>
    <h1 className="text-[18px] md:text-[25px] font-[600] font-raleway ">
      Thumbnail
    </h1>
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
            className="aspect-video shadow"
          />
        ) : (
          <div className="border-[2px] rounded-[5px] border-dashed w-full aspect-video border-[#33658A] flex flex-col justify-center items-center">
            <span className="text-[20px]">Select Thumbnail</span>
            <span className="text-[16px]">Recommended size</span>
            <span className="text-[16px]">1280*720</span>
          </div>
        )}
      </label>
    </div>
  </div>
  <div className="bg-white mt-[70px] rounded-[5px] p-[20px]">
    <h1 className="font-[600] font-lato text-[18px] md:text-[25px]">
      General Markdown Rules
    </h1>
    <ul className="mt-[10px] space-y-2">
      {mdRules.map(({ title, rule }) => {
        return (
          <li
            className="text-[16px] md:text-[20px] font-raleway"
            key={title}
          >
            <p className="font-[500]">{title}</p>
            <p className="font-[700] break-words">{rule}</p>
          </li>
        );
      })}
      <li className="text-center">
      </li>
    </ul>
  </div>
</div>
</div> */}
