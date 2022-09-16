import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { waitlist } from "../../data";
import { default as api } from "../../services/bitesApi";

function RecentBtes() {
  const [bite, setBite] = useState(null);
  const { data, error, isLoading, isSuccess } = api.useBitesQuery();
  const bites = data?.posts;

  useEffect(() => {
    setBite(bites);
  }, [bites]);

  return (
    <div className="  ">
      <div className="flex items-center justify-between">
        <div className="text-[20px] leading-[28px] font-raleway font-[800] ">
          Recent Bite-sized Reads
        </div>
        <div className="text-[14px] font-[400] font-lato text-[#33658A]">
          <Link to="/dashboard/bites">See All</Link>
        </div>
      </div>
      {isLoading && (
        <div className="w-full h-[100px] bg-[#FAFAFA] animate-pulse flex items-center justify-center font-[600] font-raleway rounded-[5px] mt-[15px]">
          Loading...
        </div>
      )}
      {error && (
        <div className="w-full h-[100px] bg-[#FAFAFA] flex items-center justify-center font-raleway font-[600] mt-[10px] rounded-[5px]">
          Something went wrong
        </div>
      )}
      <div className="flex flex-col w-full space-y-4 mt-[10px] h-full">
        {isSuccess && (
          <div>
            {bite?.length === 0 ? (
              <div className="w-full h-[100px] bg-[#FAFAFA] flex items-center justify-center font-raleway font-[600] mt-[10px] rounded-[5px]">
                No Posts Yet
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                {bite?.slice(0, 3).map(({ id, title, slug, content }) => (
                <Link to={`/dashboard/bite/${slug}`} key={id}>
                  <div
                    
                    className="bg-[#FAFAFA]  h-[90px] p-[12px] rounded-[8px]"
                  >
                    <div className="font-raleway font-[700] text-[16px] leading-[22px]">
                      {title}
                    </div>
                    <div className='mt-[10px] text-[12px]'>
                       <span> {Math.ceil(content.trim().split(/\s+/).length / 275)}</span> <span className="font-montserrat">MINS</span>
                    </div>
                  </div>
                </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentBtes;
