import React from "react";
import { Link } from "react-router-dom";
import Support from "../../assets/support.png";

function SupportSection() {
  return (
    <div>
      <div className="hidden md:flex mt-[150px] mb-[40px]  w-full flex-col md:flex-row ">
        <div className="flex-1 h-full">
          <img src={Support} alt="" className="w-full lg:w-[900px]" />
        </div>
        <div className="bg-[#EBEEF5] w-full flex-2 flex flex-col items-left justify-center p-[10px] md:pl-[30px]">
          <p className="font-montserrat font-[400] text-[14px] ">
            1 to 1 SUPPORT
          </p>
          <p className="font-raleway font-[800] text-[18px] md:text-[28px] py-[10px]">
            Book a session with our experts for a{" "}
            <span className="text-[#4395C1]">detailed analysis</span>{" "}
            <br className="hidden md:block" /> and{" "}
            <span className="text-[#4395C1]">individual consultation</span>
          </p>
          <p className="text-[16px] font-lato font-[500] ">
            Complimentary session is available upon completion of{" "}
            <span className="text-[#4395C1] underline underline-offset-2">
              {" "}
              Fundamental B.A.S.I.C.S{" "}
            </span>
            <br className="hidden md:block" /> development class
          </p>

          <Link
            to="/support"
            className="mt-[20px] bg-[#4395C1] text-white px-[20px] py-[8px] rounded-[10px] w-fit font-lato text-[14px]"
          >
            Find Out More
          </Link>
        </div>
      </div>
      <div className='mt-[50px] px-[15px] flex md:hidden flex-col'>
        <div>
        <p className="font-montserrat font-[400] text-[14px] ">
            1 to 1 SUPPORT
          </p>
          <p className="font-raleway font-[800] text-[18px] md:text-[28px] py-[10px]">
            Book a session with our experts for a{" "}
            <span className="text-[#4395C1]">detailed analysis</span>{" "}
            <br className="hidden md:block" /> and{" "}
            <span className="text-[#4395C1]">individual consultation</span>
          </p>
          {/* <p className="text-[16px] font-lato font-[500] ">
            Complimentary session is available upon completion of{" "}
            <span className="text-[#4395C1] underline underline-offset-2">
              {" "}
              Fundamental B.A.S.I.C.S{" "}
            </span>
            <br className="hidden md:block" /> development class
          </p> */}
        </div>
        <div className='border rounded-[10px]'>
        <div className="flex-1 h-full">
          <img src={Support} alt="" className="w-full rounded-t-[10px]" />
        </div>
              <div className="m-[15px] flex flex-col space-y-3">
                <p className='font-[400] text-[12px] font-montserrat ' >Weekdays, 9am - 5pm SGT</p>
                <p className="font-lato text-[14px] font-[400]">Complimentary session is available upon completion of <span className="underline underline-offset-2 text-[#4395C1]">Fundamental B.A.S.I.C.S</span> development class</p>
                <p className='font-montserrat flex items-center'>
                  <span></span>
                  <span className="text-[12px]">30 mins</span>
                </p>
              </div>
              <div className="bg-[#4395C1] rounded-b-[10px] py-[15px] text-white flex items-center justify-center">
                <Link to='/support'>Find Out More</Link>
              </div>
        </div>
      </div>
    </div>
  );
}

export default SupportSection;
