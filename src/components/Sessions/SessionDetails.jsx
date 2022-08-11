import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Sessions } from "../../data";
import Thumbnail from "../../assets/thumbnail.png";


function SessionDetails() {
  const { slug } = useParams();
  const [session, setSession] = useState(null);
  // const bites = data?.posts;

  useEffect(() => {
    let session = Sessions?.find((bite) => bite.slug === slug);

    if (session) {
      setSession(session);
    }
  }, [slug]);
  return (
    <div className="mt-[30px] md:mt-[60px]">
      {session ? (
        <div className=" md:mx-[150px] flex flex-col md:flex-row    justify-around">
          <div className="mx-[15px]">
            <div className="w-ful flex flex-col items-left my-[10px] ">
              <p className="font-montserrat text-[14px] md:text-[18px] font-[500] text-[#33658A]">
                LIVE SESSION
              </p>
              <p className="font-raleway text-[28px] md:text-[32px] font-[800] text-[#232C38]">
                {session.title}
              </p>
            </div>
            <div className="w-full lg:w-[648px] h-[200px] lg:h-[400px] border rounded-[15px]">
              <img
                src={Thumbnail}
                alt=""
                className="h-full w-full object-cover rounded-t-[15px] md:rounded-[15px]"
              />
            </div>
            <div className="mt-[15px] ">
              <p className="font-[700] font-raleway text-[16px] ">Speaker</p>
              <div className="mt-[15px]">
                <div className=" flex space-x-2 h-fit items-center">
                  <div className="h-[44px] w-[44px] rounded-[10px] ">
                    <img
                      src={Thumbnail}
                      alt=""
                      className="h-[44px] w-[44px] object-cover rounded-[10px]"
                    />
                  </div>
                  <div>
                    <p className="font-[400] font-lato text-[16px]">Name</p>
                    <p className="font-[400] font-montserrat text-[12px]">
                      JOB TITLE
                    </p>
                  </div>
                </div>
                <div>Header and stuff</div>
              </div>
            </div>
          </div>
          <div className="md:bg-[#EBEEF5] md:ml-[100px] rounded-[15px] px-[0px] md:px-[15px] py-[15px] md:py-[25px] w-full md:min-w-[360px] flex flex-col md:flex-col-reverse justify-start items-start h-full">
            <div className="w-full">
              <div className="hidden md:block  text-[#232C38] md:pb-[50px] md:border-b border-[#D4D4D4]">
                <div>
                  <p className="font-[700] text-[20px] text-center font-raleway">
                    Save Your Spot!{" "}
                  </p>
                  <p className="font-[400] text-[16px] font-lato text-center break-words">
                    Can’t make it? Don’t worry, you’ll get a recording of this
                    class, so register today!
                  </p>
                </div>
                <div className="mt-[20px] w-full">
                  <button className="bg-[#EB6D74] text-white py-[10px] rounded-[12px] w-full text-center">
                    <a
                      href="https://iani.eu"
                      rel="noreferrer"
                      target="_blank"
                      className=""
                    >
                      Register Now
                    </a>
                  </button>
                </div>
              </div>
              <div>
                <div className="px-[15px] md:m-0 flex flex-col md:flex-row items-start md:items-center py-[15px] space-y-4 md:space-y-0 md:space-x-2 w-full"></div>
                <div className=" px-[15px] md:m-0">
                  <div className="my-[20px] w-full">
                    <p className="font-[700] text-[14px] md:text-[16px] font-raleway">
                      What you will learn
                    </p>
                    <p className="font-[500] font-lato text-[12px] md:text-[14px] mt-[5px]">
                      Description (1 - 3 rows max)
                    </p>
                  </div>
                  <div className="mt-[25px]">
                    <p className="font-[700] text-[14px] md:text-[16px] font-raleway">
                      Who should register for this session?
                    </p>
                    <p className="font-[500] font-lato text-[12px] md:text-[14px] mt-[5px]">
                      Description (1 - 3 rows max)
                    </p>
                  </div>
                </div>
              </div>
              <div className=" bg-[#EBEEF5] w-full  block md:hidden mt-[70px] text-[#232C38] md:pb-[50px] md:border-b border-[#D4D4D4] py-[30px] px-[15px]">
                <div className="w-full flex items-center">
                  <div className="w-full">
                    <div className="text-center w-full"></div>
                    <div className="mt-[20px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit iste inventore dicta necessitatibus officiis! Incidunt
                      rerum libero expedita, omnis qui ducimus, deserunt illo
                      alias id assumenda, quos vero est tempora.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full font-[700] font-raleway text-[25px] w-full text-center">
          Hello Motherfucker!!
        </div>
      )}
    </div>
  );
}

export default SessionDetails;
