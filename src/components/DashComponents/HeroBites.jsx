import React from "react";
import Thumbnail from "../../assets/thumbnail.png";
import { Link } from "react-router-dom";
import { default as api } from "../../redux/apiSlice";

function HeroBites() {
  const { data, isFetching, isSuccess, isError } = api.useGetBitesQuery();

  const bites = data?.posts;

  console.log(bites);

  let biteList;

  if (isFetching) {
    biteList = <div className="h-[150px] w-full text-center flex items-center justify-center text-[18px] font-lato">Loading...</div>;
  } else if (isSuccess) {
    biteList = bites.slice(0, 4).map((bite) => (
      <div
        className="bg-white rounded-[5px] flex items-center h-[100px]"
        key={bite.id}
      >
        <div className="flex-1">
          <img
            src={bite.thumbnail || Thumbnail}
            alt=""
            className="h-[100px]  w-[100px] md:w-[200px] object-cover"
          />
        </div>
        <div className="h-full px-[10px] flex flex-col justify-center w-full flex-2 py-[10px]">
          <p className="font-lato text-[14px] font-[600]">
            {bite.title.substring(0, 20) + "..."}
          </p>
          <p className=" w-full text-[14px] mb-[5px] break-words">
            {bite.content.substring(0, 80) + "..."}
          </p>
        </div>
      </div>
    ));
  } else if (isError) {
    biteList = (
      <div className="h-[150px] w-full text-center flex items-center justify-center text-[18px] font-lato">
        Could not get Bites
      </div>
    );
  }

  return (
    <div className="flex-1 w-full bg-gray-200 px-[10px] py-[15px] rounded-[5px] mt-[20px]">
      <div className="flex items-center justify-between">
        <div className="text-[18px] font-lato ">Recent Bites</div>
        <div className="text-[16px] font-lato">
          <Link to="/dashboard/bites">See All</Link>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-[30px]">{biteList}</div>
    </div>
  );
}

export default HeroBites;
