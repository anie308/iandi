import React from "react";

function DashHomeHero() {
  const cardArr = [
    {
      name: "Courses",
      value: 30
    },
    {
      name: "Sessions",
      value: 30

    },
    {
      name: "Bites",
      value: 30

    },
    {
      name: "Waiters",
      value: 30

    },
  ];

  return (
    <div className="flex items-center justify-center md:justify-start w-full">
      <div className=" grid grid-cols-2  sm:flex   gap-4 mt-[30px]  overflow-x-auto snap-center w-fit p-4">
        {cardArr.map(({ name, value }) => (
          <div
            key={name}
            className="shadow  bg-white border-[1px] flex-1  border-[#E3E3E3] rounded-[10px] min-w-[140px] max-w-[140px] md:min-w-[200px]   min-h-[110px] max-h-[110px] p-2"
          >
            <div className="font-[600] text-[20px] font-lato">{name}</div>
            <div className="mt-[5px] flex items-center flex-row justify-start w-full  text-[40px] font-raleway">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashHomeHero;
