import React from "react";
import Aga from "../../assets/aga.png";
import Mei from "../../assets/svg/mei.svg";
import Yushe from "../../assets/svg/yushe.svg";
import Deborah from "../../assets/svg/deborah.svg";
import Steph from "../../assets/svg/steph.svg";
import Ana from "../../assets/svg/ana.svg";
import RoadMap from '../RoadMap'

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

      <div className="px-[15px] flex flex-col items-center justify-center w-full mt-[40px]">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0  items-center  ">
          <div className="bg-[#FF7373] h-[260px] md:h-[450px] w-[300px] md:w-[320px] rounded-[12px] md:rounded-none  md:rounded-tl-[12px]   flex flex-row justify-between md:flex-col ">
            <div className="absolute lg:relative w-[170px]  lg:flex-1 first-letter p-[10px] md:p-[15px] md:w-[320px]">
              <div className="w-full flex flex-col">
                <p className="font-[800] font-raleway text-[16px] md:text-[28px] text-[#333333]">
                  Aga Gajownik
                </p>
                <p className="font-[400] text-[14px] md:text-[12px] font-montserrat uppercase">
                  CEO,
                </p>
                <p className="font-[400] text-[12px] font-montserrat uppercase">
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
            <div className="lg:flex-1 flex items-end justify-end w-full">
              <img src={Aga} alt="" className="" />
            </div>
          </div>
          <div className="bg-[#B0BAFF] h-[260px] md:h-[450px] w-[300px] md:w-[320px] rounded-[12px] md:rounded-none    flex flex-row justify-between md:flex-col relative">
          <div className="absolute lg:relative w-[170px]  lg:flex-1 first-letter: p-[10px] md:w-[320px]">
              <div className="w-full">
                <p className="font-[800] font-raleway text-[16px] md:text-[28px] text-[#333333]">
                Mei
                </p>
                <p className="font-[400] text-[14px] md:text-[12px] font-montserrat uppercase">
                Ops Director,
                </p>
                <p className="font-[400] text-[12px] font-montserrat uppercase">
                  Co-Founder
                </p>
                <p className="mt-[5px] font-[400] text-[12px] font-lato">
                Helicopter mom and dipping fries into hot fudge sundaes.
                </p>
                <p className="break-words font-[400] text-[14px] italic font-lato mt-[5px]">
                "If we did all the things we are capable of, we would literally astound ourselves." 
- Thomas Edison
                </p>
                <p></p>
              </div>
            </div>
            <div className="lg:flex-1 absolute lg:relative bottom-[0px] right-[-20px]  flex items-end lg:items-center  justify-end lg:justify-center w-full">
              <img src={Mei} alt="" className="" />
            </div>
          </div>
          <div className="bg-[#FFB893] h-[260px] md:h-[450px] w-[300px] md:w-[320px] rounded-[12px] md:rounded-none  md:rounded-tr-[12px]   flex flex-row justify-between md:flex-col relative">
          <div className="absolute lg:relative w-[170px]  lg:flex-1 first-letter: p-[10px] md:w-[320px]">
              <div className="w-full">
                <p className="font-[800] font-raleway text-[16px] md:text-[28px] text-[#333333]">
                Yu She
                </p>
                <p className="font-[400] text-[14px] md:text-[12px] font-montserrat uppercase">
                Product Owner,
                </p>
                <p className="font-[400] text-[12px] font-montserrat uppercase">
                UX Designer
                </p>
                <p className="mt-[5px] font-[400] text-[12px] font-lato break-words">
                At the beach with G&T
                </p>
                <p className="break-words font-[400] text-[14px] italic font-lato mt-[5px]">
                "Let's go invent tomorrow rather than worrying about what happened yesterday" 
- Steve Jobs
                </p>
                <p></p>
              </div>
            </div>
            <div className="lg:flex-1 absolute lg:relative bottom-[0px] right-[-20px]  flex items-end lg:items-center  justify-end lg:justify-center w-full">
              <img src={Yushe} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-[10px] lg:m-0 gap-2 lg:gap-0">
          <div className="bg-[#FFF493] h-[260px] md:h-[450px] w-[300px] md:w-[320px] rounded-[12px] md:rounded-none  md:rounded-bl-[12px]   flex flex-row justify-between md:flex-col relative">
          <div className="absolute lg:relative w-[170px]  lg:flex-1 first-letter: p-[10px] md:w-[320px]">
              <div className="w-full">
                <p className="font-[800] font-raleway text-[16px] md:text-[28px] text-[#333333]">
                Deborah
                </p>
                
                <p className="font-[400] text-[12px] font-montserrat uppercase">
                UX Designer
                </p>
                <p className="mt-[5px] font-[400] text-[12px] font-lato break-words">
                A proud connoisseur of design books and granny hobbies.
                </p>
                <p className="break-words font-[400] text-[14px] italic font-lato mt-[5px]">
                “If you travel within, you’ll travel the whole wide world and beyond.”
                </p>
                <p></p>
              </div>
            </div>
            <div className="lg:flex-1 absolute lg:relative bottom-[0px] right-[-20px]  flex items-end lg:items-center  justify-end lg:justify-center w-full">
              <img src={Deborah} alt="" className="" />
            </div>
          </div>
          <div className="bg-[#D2EF94] h-[260px] md:h-[450px] w-[300px] md:w-[320px] rounded-[12px] md:rounded-none     flex flex-row justify-between md:flex-col relative">
          <div className="absolute lg:relative w-[170px]  lg:flex-1 first-letter: p-[10px] md:w-[320px]">
              <div className="w-full">
                <p className="font-[800] font-raleway text-[16px] md:text-[28px] text-[#333333]">
                Stephanie
                </p>
                <p className="font-[400] text-[12px] font-montserrat uppercase">
                Data Scientist
                </p>
                
                <p className="font-[400] text-[12px] font-montserrat uppercase">
                UX Designer
                </p>
                <p className="mt-[5px] font-[400] text-[12px] font-lato break-words">
                I enjoy extreme activities such as cracking my knuckles, beer drinking, daydreaming and watching reruns of the office
                </p>
                <p className="break-words font-[400] text-[14px] italic font-lato mt-[5px]">
                “We work to live, not live to work”
                </p>
                <p></p>
              </div>
            </div>
            <div className="lg:flex-1 absolute lg:relative bottom-[0px] right-[-20px]  flex items-end lg:items-center  justify-end lg:justify-center w-full">
              <img src={Steph} alt="" className="" />
            </div>
          </div>
          <div className="bg-[#FF8C9C] h-[260px] md:h-[450px] w-[300px] md:w-[320px] rounded-[12px] md:rounded-none  md:rounded-br-[12px]   flex flex-row justify-between md:flex-col relative">
          <div className="absolute lg:relative w-[170px]  lg:flex-1 first-letter: p-[10px] md:w-[320px]">
              <div className="w-full">
                <p className="font-[800] font-raleway text-[16px] md:text-[28px] text-[#333333]">
                Anna
                </p>
                <p className="font-[400] text-[12px] font-montserrat uppercase">
                Marketing Specialist
                </p>
                
                
                <p className="mt-[5px] font-[400] text-[12px] font-lato break-words">
                I love nature, literature and running.                 </p>
                <p className="break-words font-[400] text-[14px] italic font-lato mt-[5px]">
                "Life is like riding a bicycle. To keep your balance, you have to be constantly on the move."
                </p>
                <p></p>
              </div>
            </div>
            <div className="lg:flex-1 absolute lg:relative bottom-[0px] right-[-20px]  flex items-end lg:items-center  justify-end lg:justify-center w-full">
              <img src={Ana} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-[80px] lg:my-[100px] flex flex-col items-center justify-center">
        <p className="font-[800] font-raleway text-[22px] md:text-[32px] leading-[45px] mb-[20px] md:mb-[100px]">What We Have Done So Far</p>
        <RoadMap/>
      </div>
      <div className="w-full flex items-center justify-start lg:justify-center px-[15px]">
        <div className="flex flex-col items-center  justify-start lg:justify-center mt-[20px] w-full lg:w-[650px]">
          <div className="w-full">
            <p className="font-[800] text-start lg:text-center font-raleway text-[28px] lg:text-[32px] leading-[45px] text-[#333333]">
              We dont stop here
            </p>
          </div>
          <div className="mt-[10px]">
            <p className="mb-[10px] font-raleway font-[800] text-[16px] lg:text-[20px] leading-[28px]">
              Our <span className="text-[#4395C1] ">Mission</span>
            </p>
            <p className="font-lato font-[400] text-[16px] leading-[22px] break-words mb-[10px]">
              I&I’s mission is to empower individuals and businesses to harness
              their full potential through the lens of innovation,
              entrepreneurship and coaching.{" "}
            </p>
            <p className="font-lato font-[400]  text-[16px] lg:text-[20px]  leading-[22px] break-words">
              By working in close collaboration with our clients, we advise and
              strategise with our tried-and-tested knowhow to help them achieve
              their personal and professional goals.
            </p>
          </div>
          <div className="mt-[30px]">
            <p className="mb-[10px] font-raleway font-[800]  text-[16px] lg:text-[20px]  leading-[28px]">
              Our <span className="text-[#EB6D74] ">Vision</span>
            </p>
            <p className="font-lato font-[400] text-[16px] leading-[22px] break-words mb-[10px]">
              {" "}
              I&I envisions a future where people are confident and excited
              about their potential and opportunities in an ever-changing world.
            </p>
            <p className="font-lato font-[400]  text-[16px] lg:text-[20px]  leading-[22px] break-words">
              We believe that everyone deserves to have access to high quality
              coaching and training tools, and we are here to support their
              self-development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageSection;
