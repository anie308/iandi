import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Thumbnail from "../../assets/thumbnail.png";
import { IoTimeOutline } from "react-icons/io5";
import {biteReads} from '../../data'

function BiteItem() {
  const { slug } = useParams();
  const [bite, setBite] = useState(null);
  // const bites = data?.posts;

  useEffect(() => {
    let bite = biteReads?.find((bite) => bite.slug === slug);
    console.log(bite);

    if (bite) {
      setBite(bite);
    }
  }, [slug]);
  
  return (
    <div className="shit flex flex-row overflow-x-auto  items-center justify-between  gap-4 md:grid md:grid-cols-4 md:overflow-hidden">
      <div
        className="min-w-[280px] max-w-[300] max-h-[360px]   rounded-[15px] flex flex-col justify-between bg-primary"
        key={bite.id}
      >
        <div className="w-full ">
          <div>
            <img
              src={ Thumbnail}
              alt=''
              className="h-[180px] rounded-t-[20px] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col w-full bg-primary h-full p-[10px]">
          <div className="text-left font-[700] font-raleway text-[16px] h-full w-full">
            {bite.title}
          </div>
          <div className="  text-lato text-[14px] md:text-[18px] flex items-center space-x-1 h-full w-full">
            <IoTimeOutline className="text-[18px]" />
            <span className="flex items-center">
              {Math.ceil(bite.content.trim().split(/\s+/).length / 275)} min{" "}
            </span>
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
    </div>
  );
}

export default BiteItem;
