import React from "react";
import Thumbnail from "../../assets/thumbnail2.png";

function SupportPageSection() {
  return (
    <div className="my-[50px]">
      <div className=" md:mx-[150px] flex flex-col md:flex-row    justify-around">
        <div className="mx-[15px]">
          <div className="w-ful flex flex-col items-left my-[10px] ">
            <p className="font-montserrat text-[14px] md:text-[18px] font-[500] text-[#33658A]">
              1 TO 1 SUPPORT
            </p>
            <p className="font-raleway text-[28px] md:text-[32px] font-[800] text-[#232C38]">
              Personalised Session
            </p>
            <p></p>
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
            <div className="hidden md:block  text-[#232C38] md:pb-[30px] md:border-b border-[#D4D4D4]">
              <div>
                <p className="font-[700] text-[20px] text-center font-raleway">
                  Chat with us
                </p>
                <p className="font-[400] text-[16px] font-lato text-center break-words">
                  In a private and safe space
                </p>
              </div>
              <div className="mt-[20px] w-full">
                <button className="bg-[#4395C1] text-white py-[10px] rounded-[12px] w-full text-center">
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
                    Who should book this session?
                  </p>
                  <p className="font-[500] font-lato text-[12px] md:text-[14px] mt-[5px]">
                    Description (1 - 3 rows max)
                  </p>
                </div>
                <div className="mt-[25px]">
                  <p className="font-[700] text-[14px] md:text-[16px] font-raleway">
                    Pricing
                  </p>
                  <p className="font-[500] font-lato text-[12px] md:text-[14px] mt-[5px]">
                    $240 per session. A complimentary session is available upon
                    completion of B.A.S.I.C.S development course
                  </p>
                </div>
              </div>
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
                        Can’t make it? Don’t worry, you’ll get a recording of
                        this class, so register today!
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
    </div>
  );
}

export default SupportPageSection;
