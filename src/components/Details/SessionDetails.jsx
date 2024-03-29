import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Thumbnail from "../../assets/thumbnail.png";
import insta from "../../assets/svg/insta.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import TestimonialSection from "../Sections/TestimonialSection";
import { default as api } from "../../services/apiSlice";

function SessionDetails() {
  const { slug } = useParams();
  const { data } = api.useSessionsQuery();
  const sessions = data?.sessions;

  const [session, setSession] = useState(null);

  useEffect(() => {
    let session = sessions?.find((session) => session.slug === slug);
    console.log(session);

    if (session) {
      setSession(session);
    }
  }, [slug, sessions]);
  return (
    <div className="mt-[30px] md:mt-[60px]">
      <div>
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
                  src={session.thumbnail || Thumbnail}
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
                        src={session.thumbnail || Thumbnail}
                        alt=""
                        className="h-[44px] w-[44px] object-cover rounded-[10px]"
                      />
                    </div>
                    <div>
                      <p className="font-[400] font-lato text-[16px]">
                        {session.speakerName}
                      </p>
                      <p className="font-[400] font-montserrat text-[12px]">
                        {session.speakerJobTitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-[10px] space-y-3">
                    <div className="font-lato text-[14px] font-[400] ">
                      {session.speakerDesc}
                    </div>
                    <div className="flex items-center space-x-1">
                      <div>
                        <a
                          href={session.speakerLinkedIn}
                          target="_blank"
                          rel=" noreferrer"
                        >
                          <img src={linkedin} alt="" />
                        </a>
                      </div>
                      <div>
                        <a
                          href={session.speakerInsta}
                          target="_blank"
                          rel=" noreferrer"
                        >
                          <img src={insta} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
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
                  <div
                    className=" px-[15px] md:m-0 font-lato"
                    dangerouslySetInnerHTML={{
                      __html: session.sessionHighlight,
                    }}
                  />
                </div>
                <div className=" bg-[#EBEEF5] w-full  block md:hidden mt-[70px] text-[#232C38] md:pb-[50px] md:border-b border-[#D4D4D4] py-[30px] px-[15px]">
                  <div className="w-full flex items-center">
                    <div className="w-full">
                      <div>
                        <div>
                          <p className="font-[700] text-[20px] text-center font-raleway">
                            Save Your Spot!{" "}
                          </p>
                          <p className="font-[400] text-[16px] font-lato text-center break-words">
                            Can’t make it? Don’t worry, you’ll get a recording
                            of this class, so register today!
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full font-[700] font-raleway text-[25px] w-full text-center">
            Session Not Found!
          </div>
        )}
      </div>
      <div>
        <TestimonialSection />
      </div>
    </div>
  );
}

export default SessionDetails;
