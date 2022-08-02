import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../../assets/thumbnail.png";
import { IoTimeOutline } from "react-icons/io5";
import { default as api } from "../../redux/apiSlice";

function BiteItem() {
  const { data, isFetching, isSuccess, isError } = api.useGetBitesQuery();

  const bites = data?.posts;

  let biteList;

//   const content = bites.content;
// const wpm = 275;
// const words = content.trim().split(/\s+/).length
// const time = Math.ceil(words / wpm);



if (isFetching) {
      
  biteList = <div className="h-[150px] w-full text-center flex items-center justify-center text-[18px] font-lato">Loading...</div>;
} else if (isSuccess) {
  biteList =  bites.map((bite)=> (
    <div className="min-w-[280px] max-w-[300] max-h-[360px]   rounded-[15px] flex flex-col justify-between " key={bite.id}>
    <div className="w-full ">
      <div>
        <img
          src={bite.thumbnail || Thumbnail} alt={bite.title}
          className="h-[180px] rounded-t-[20px] w-full object-cover"
        />
      </div>
    </div>
     
    <div className="flex flex-col w-full bg-primary h-full p-[10px]">
      <div className="text-left font-[700] font-raleway text-[16px] h-full w-full">
        {bite.title.substring(0, 45) + "..."}
      </div>
      <div className="  text-lato text-[14px] md:text-[18px] flex items-center space-x-1 h-full w-full">
        <IoTimeOutline className="text-[18px]" />
        {/* <span className="flex items-center">{time} min </span> */}
      </div>
    </div>
    <div className="bg-[#F6C042] py-[15px] flex items-center justify-center rounded-b-[15px] cursor-pointer">
      <Link
        to={`/bites/${bite.slug}`}
        className="text-lato text-[16px] text-white"
      >
        Read Now
      </Link>
    </div>
  </div>
    ))
} else if (isError) {
  biteList = (
    <div className="h-[150px] w-full text-center flex items-center justify-center text-[18px] font-lato">
      Could not get Bites
    </div>
  );
}


  return (
<div className='shit flex flex-row overflow-x-auto  items-center justify-between  gap-4 md:grid md:grid-cols-4 md:overflow-hidden'>{biteList}</div>
  );
}

export default BiteItem;
