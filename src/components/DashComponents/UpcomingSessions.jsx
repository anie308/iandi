import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { default as api } from "../../services/apiSlice";

function UpcomingSessions() {
  const [session, setSession] = useState(null);
  const { data, error, isLoading, isSuccess } = api.useSessionsQuery();
  const sessions = data?.sessions;

  useEffect(() => {
    setSession(sessions);
  }, [sessions]);

  return (
    <div className="  ">
      <div className="flex items-center justify-between">
        <div className="text-[20px] leading-[28px] font-raleway font-[800] ">
          Upcoming Live Sessions
        </div>
        <div className="text-[14px] font-[400] font-lato text-[#33658A]">
          <Link to="/dashboard/waitlist"><p>See All </p><BsChevronRight className="text-[12px] ml-[5px]"/></Link>
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
            {session?.length === 0 ? (
              <div className="w-full h-[100px] bg-[#FAFAFA] flex items-center justify-center font-raleway font-[600] mt-[10px] rounded-[5px]">
                No Sessions
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                {session?.slice(0, 3).map(({ id, title, slug, createdAt }) => (
                  <Link to={`/dashboard/session/${slug}`} key={id}>
                  <div
                    
                    className="bg-[#FAFAFA]  h-[100px] p-[12px] rounded-[8px]"
                  >
                    <div className='uppercase bg-[#FBDF8B] text-[#333333] font-montserrat text-[12px] p-[4px_8px] rounded-[5px] w-fit mb-[5px]'>in 3 days</div>
                    <div>{createdAt}</div>
                    <div className="font-raleway font-[700] text-[16px] leading-[22px]">
                      {title}
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

export default UpcomingSessions;
