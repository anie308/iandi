import React from "react";
import { socials } from "../../data";

function Footer() {
  return (
    <div className="flex flex-col w-full items-center mt-[80px] mb-[20px] lg:mb-[40px]">
      <div className="flex space-x-3">
        {socials.map(({ path, icon }) => (
          <div key={path}>
            <a href={path} target="_blank" rel="noreferrer">
              <img src={icon} alt="" />{" "}
            </a>
          </div>
        ))}
      </div>
      <div className="w-full text-center text-[12px] font-lato text-mobilelink font-[400] mt-[10px]">
        105 Cecil Street #18-00 <br />
        The Octagon <br />
        Singapore 069534
      </div>
    </div>
  );
}

export default Footer;
