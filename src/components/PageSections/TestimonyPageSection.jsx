import React from 'react'
import Thumbnail from "../../assets/thumbnail2.png";


function TestimonyPageSection() {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className=" w-fit mt-[20px]">
          <div className="w-ful flex flex-col items-left my-[10px] ">
            <p className="font-montserrat text-[14px] md:text-[18px] font-[500] text-[#33658A]">
              1 TO 1 SUPPORT
            </p>
            <p className="font-raleway text-[28px] md:text-[32px] font-[800] text-[#232C38]">
              Personalised Session
            </p>
            <p className="w-[44px] h-[3px] bg-[#455265] "></p>

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
    </div>
  )
}

export default TestimonyPageSection