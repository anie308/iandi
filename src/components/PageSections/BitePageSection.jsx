import React from "react";
import Thumbnail from "../../assets/thumbnail.png";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { useState } from "react";
import { default as api } from "../../services/apiSlice";

function BitePageSection() {
  const [more, setMore] = useState(4);
  const { data, error, isLoading, isSuccess } = api.useBitesQuery();
  const bites = data?.posts;

  return (
    <div>
      <div className="mt-[50px] w-full flex flex-col items-center justify-center">
        <p className="font-[800] text-[36px] font-raleway mb-[20px] text-center">
          Bite-Sized Reads
        </p>
        <p className="font-lato text-[18px] font-[400] text-center">
          Stay updated, stay inspired - even if you’re short on time.
        </p>
      </div>
      <div className="my-[80px] px-[10px]">
        {isLoading && (
          <div className="h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center">
            Loading...
          </div>
        )}
        {error && (
          <div className="h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center">
            Something went wrong{" "}
          </div>
        )}
        {isSuccess && (
          <div className="grid  lg:grid-cols-2 gap-10 md:px-[30px] lg:px-[220px] justify-center w-full">
            {bites.slice(0, more).map((bite) => (
              <Link to={`/bites/${bite.slug}`} key={bite.id}>
                <div className="w-full md:min-w-[410px] max-w-[410px] border flex rounded-[12px]">
                  <div>
                    <img
                      src={Thumbnail || bite.thumbnail}
                      alt=""
                      className="h-full md:h-[100px] min-w-[120px] object-cover rounded-l-[12px] max-w-[120px]"
                    />
                  </div>
                  <div className="p-[10px]">
                    <div>
                      <p className="font-raleway text-[12px] md:text-[16px] font-[700] ">
                        {bite.title}
                      </p>
                    </div>
                    <div className="flex items-center mt-[20px]">
                      <IoTimeOutline className="text-[14px] md:text-[18px]" />
                      <p className="text-[12px] md:text-[14px]">
                        {Math.ceil(
                          bite.content.trim().split(/\s+/).length / 275
                        )}{" "}
                        min{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="mt-[50px] w-full flex justify-center">
         {bites?.length > 4 && (
           <button
           className="border border-[#F6C042] text-[18px] text-[#F6C042] font-lato font-[400] px-[20px] py-[10px] rounded-[10px]"
           onClick={(e) => setMore(more + 4)}
         >
           Load More
         </button>
         )}
        </div>
      </div>
    </div>
  );
}

export default BitePageSection;
