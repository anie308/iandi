import React from "react";

function CourseRegisterSection() {
    const handleClick = () => {
        alert("You have successfully registered for this course!");
    }
  return (
    <div className="mt-[80px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <p className="font-[800] font-raleway text-[28px] md:text-[36px] text-[#232C38] text-center">
          One Account for All <br className="hidden md:block" /> Development Courses
        </p>
        <p className="font-[400] font-lato text-[20px] mt-[5px] md:mt-[20px]">
          Free until 30 August 2022
        </p>
      </div>
      <div className="flex flex-col p-[20px] my-[50px] items-left w-full md:w-[420px] ">
        <form action="" >
          <div className="space-y-4">
          <div className="flex flex-col items-start space-y-1 w-full">
            <div>
              <label htmlFor="name" className="font-lato">
                First and last name <sup></sup>
              </label>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Your first and last name"
                className="border-b pb-[5px] outline-none w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-1 w-full">
            <div>
              <label htmlFor="email" className="font-lato">
                Email<sup></sup>
              </label>
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Your personal email address"
                className="border-b pb-[5px] outline-none w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <div>
              <label htmlFor="name" className="font-lato">
              Occupation 
              </label>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="What do you do for work?"
                className="border-b pb-[5px] outline-none w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <div>
              <label htmlFor="name" className="font-lato">
              Residing Country
              </label>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Which country are you at?"
                className="border-b pb-[5px] outline-none w-full"
                required
              />
            </div>
          </div>
          </div>
          <div className="w-full mt-[50px]">
            <button className="bg-[#33658A] text-white text-[18px] py-[8px] w-full rounded-[10px] font-lato" onClick={handleClick}>Get my free account now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseRegisterSection;
