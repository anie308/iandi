import React from "react";
import Aga from "../../assets/aga.png";

function AboutPageSection() {
  return (
    <div>
      <div className="my-[40px] w-full ">
        <p className="font-[800] font-raleway text-[28px] md:text-[32px] text-center">
          Meet the <span className="text-[#4395C1]">people</span> who lovingly{" "}
          <br className="hidden md:block" />{" "}
          <span className="text-[#4395C1]">built </span> and continues to make{" "}
          <br className="hidden md:block" /> development{" "}
          <span className="text-[#4395C1]">exciting</span>
        </p>
      </div>

      <div className="px-[10px] flex flex-col items-center justify-center w-full mt-[40px]">
        <div className="flex flex-col md:flex-row  items-center gap-4 md:gap-0">
          <div className="bg-[#FF7373] h-[260px] md:h-[450px] w-full  md:w-[320px] rounded-[12px] md:rounded-none  md:rounded-tl-[12px]   flex flex-row md:flex-col ">
            <div className="absolute md:relative flex-1 p-[10px] md:w-[320px]">
              <div className="w-full">
                <p className="font-[800] font-raleway text-[16px] md:text-[28px] text-[#333333]">
                  Aga Gajownik
                </p>
                <p className="font-[400] text-[14px] md:text-[12px] font-montserrat">
                  CEO,
                </p>
                <p className="font-[400] text-[12px] font-montserrat">
                  Co-Founder
                </p>
                <p className="mt-[5px] font-[400] text-[12px] font-lato">
                  Love fermenting kimchi.
                </p>
                <p className="break-words font-[400] text-[14px] italic font-lato mt-[5px]">
                  “I dream of a world in which everyone feels confident and
                  excited about their potential and opportunities no matter how
                  quirky they are”
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-end justify-end">
              <img src={Aga} alt="" className="" />
            </div>
          </div>
          <div className="bg-[#B0BAFF] h-[450px] w-full  md:w-[320px] "></div>
          <div className="bg-[#FFB893] h-[450px] w-full  md:w-[320px] md:rounded-tr-[12px]"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="bg-[#FFF493] h-[450px] w-full  md:w-[320px] md:rounded-bl-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            illum blanditiis atque possimus veritatis fugit ipsa. Natus iusto
            temporibus cum quo sit, placeat, dolore magnam eos ex impedit,
            molestias illo.
          </div>
          <div className="bg-[#D2EF94] h-[450px] w-full  md:w-[320px]"></div>
          <div className="bg-[#FF8C9C] h-[450px] w-full  md:w-[320px] md:rounded-br-[12px]"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageSection;
