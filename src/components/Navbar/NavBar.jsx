import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { navLinks, socials } from "../../data";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };






  return (
    <div className="sticky top-0 z-30 flex flex-col md:flex-row  bg-primary  items-center justify-between md:px-[35px] md:py-[20px]">
      <div className="flex justify-between items-center w-full md:w-fit py-[20px] px-[20px] md:p-0">
        <div>
          <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
        </div>
        <div className="flex md:hidden">
          <AiOutlineMenu
            className="text-[#333333] text-[25px] font-[300] cursor-pointer"
            onClick={handleMenu}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? " top-0" : "top-[-180%]"
        } fixed  md:relative flex-col h-full md:h-fit bg-primary md:flex-row w-full md:w-fit p-[20px] md:p-0 transition-top z-30`}
      >
        <div className="flex md:hidden w-full   items-center justify-end ">
          <FaTimes
            className="text-[30px] cursor-pointer font-[300]"
            onClick={handleMenu}
          />{" "}
        </div>
        <div className="flex flex-col justify-between items-center space-y-12 pt-[15px] md:pt-0 md:flex-row">

      <div className='flex flex-col md:flex-row justify-center items-center h-[350px] md:h-fit space-y-4  md:space-y-0'>
      {navLinks.map(({ id, name, path, className }) => (
            <div key={id}>
              <NavLink 
              onClick={handleMenu}
                to={path}
                className={`${
                  className ? className : ""
                } font-[500]  text-[18px] sm:text-[16px]  lg:text-[18px] md:ml-[20px] font-lato  `}
              >
                {name}
              </NavLink>
            </div>
          ))}
      </div>
      <div className="space-y-4 flex flex-col md:hidden">
        <div className="flex items-center w-full justify-center">
          <div className="flex space-x-3">
                {
                  socials.map(({path, icon}) => (
                    <div key={path}>
                      <a href={path} target='_blank' rel="noreferrer"><img src={icon} alt="" /> </a>
                    </div>
                  ))
                }
          </div>
        </div>
        <div className="w-full text-center text-[16px] font-lato text-mobilelink font-[500]">105 Cecil Street #18-00 <br/>
The Octagon <br/>
Singapore 069534</div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
