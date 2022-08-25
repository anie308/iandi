import React from "react";
import { Link } from "react-router-dom";

function DashHomeHero() {
  const cardArr = [
    {
      name: "Courses",
      value: 30,
      path: '/courses'
    },
    {
      name: "Sessions",
      value: 30,
      path:'/sessions'

    },
    {
      name: "Bites",
      value: 30,
      path: '/bites'

    },
    {
      name: "Waiters",
      value: 30,
      path: '/waitlist'

    },
  ];

  return (
    <div className="flex items-center justify-center md:justify-start w-full">
        <div className="bg-[#EBEEF5]">
          <div className="flex flex-col">
            <div>20</div>
            <div>NEW WAITLISTS</div>
          </div>
        </div>
        <div></div>
    </div>
  );
}

export default DashHomeHero;
