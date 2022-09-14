import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FiChevronLeft } from "react-icons/fi";
import { default as api } from "../../services/bitesApi";
import { useParams } from "react-router-dom";

function DashViewBite() {
  const { slug } = useParams();
  const { data, error, isLoading, isSuccess } = api.useBitesQuery();
  const bites = data?.posts;
  const [bite, setBite] = useState(null);

  useEffect(() => {
    const bite = bites?.find((bite) => bite.slug === slug);
    if (bite) {
      setBite(bite);
    }
  }, [slug, bites]);
  console.log(bite)
  return (
    <div className="p-[30px] ">
    <div className="  flex items-center w-full justify-between">
      <div className="border border-[#33658A] p-[5px] h-fit rounded-[5px]">
        <Link
          to="/dashboard/bites"
          className="flex items-center space-x-2 p-[5px_20px]"
        >
          <FiChevronLeft className="text-[#33658A]" />
          <p className="font-lato text-[14px] font-[400] text-[#33658A]">
            Back
          </p>
        </Link>
      </div>
      <div className=" bg-[#33658A] p-[5px] h-fit rounded-[5px]">
        <Link
          to={`/dashboard/update-course/${slug}`}
          className="flex items-center space-x-2 p-[5px_20px]"
        >
          <MdEdit className="text-white" />
          <p className="font-lato text-[14px] font-[400] text-white">Edit</p>
        </Link>
      </div>
    </div>
    <div className="w-full flex mt-[30px]">
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
        <div className='w-full'>
          {bite ? (
            <div className="flex w-full gap-4">
              <div className="flex-2 w-full bg-[#FAFAFA] rounded-[5px] p-[15px] h-[830px]">
                <p className="font-[800] font-raleway text-[20px] leading-[28px]">{bite.title}</p>
                <div className="w-full bg-[#FAFAFA] p-[10px] mt-[15px] rounded-[5px]">
                {bite.content}
               </div>
              </div>
              <div className="flex-1">
               <div className='mt-[15px]'>
                <div>{bite.estTime}</div>
                <img src={bite.thumbnail} alt=""  className="border w-[160px] h-[95px]"/>
               </div>
             
              </div>
            </div>
          ) : (
            <div className="h-[125px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center">
              Can't find Bite{" "}
            </div>
          )}
        </div>
      )}
    </div>
  </div>
  )
}

export default DashViewBite