import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { navLinks, socials } from "../data";
import { Link } from "react-router-dom";
import {useMatch} from 'react-router-dom'

function NavBar({to}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

     let match = useMatch(to !== "" ? `/` + to + "/*" : "/");


  // function CustomLink({ children, to, menu, showsidebar, ...props }: any) {
  //   let match = useMatch(to !== "" ? `/dashboard/` + to + "/*" : "/dashboard");
  //   return (
  //     <Link
  //       match={match}
  //       className={`  ${
  //         match
  //           ? "  sm:bg-[#0156da1a]  text-primary sm:border-r-[5px] sm:border-blue-500"
  //           : "text-[#AEAEAE] bg-white"
  //       }  sm:pl-20px w-[30px] sm:w-full text-lg flex flex-col sm:flex-row items-center mx-[20px] sm:mx-[5px] sm:m-0 justify-center sm:justify-start   md:mt-2  sm:p-[16px] `}
  //       to={to}
  //       {...props}
  //     >
  //       {children}
  //     </Link>
  //   );
  // }


  return (
    <div className="flex flex-col md:flex-row  bg-primary relative items-center justify-between md:px-[35px] md:py-[20px]">
      <div className="flex justify-between items-center w-full md:w-fit py-[20px] px-[20px] md:p-0">
        <div>
          <img src={Logo} alt="logo" />
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
          isOpen ? " top-0" : "top-[-100%]"
        } fixed  md:relative flex-col h-screen md:h-fit bg-primary md:flex-row w-full md:w-fit p-[20px] md:p-0 transition-top`}
      >
        <div className="flex md:hidden w-full   items-center justify-end ">
          <FaTimes
            className="text-[30px] cursor-pointer font-[300]"
            onClick={handleMenu}
          />{" "}
        </div>
        <div className="flex flex-col justify-between items-center space-y-12 pt-[75px] md:pt-0 md:flex-row">

      <div className='flex flex-col md:flex-row justify-center items-center h-full md:h-fit space-y-4  md:space-y-0'>
      {navLinks.map(({ id, name, path, className, match }) => (
            <div key={id}>
              <Link
              match={match}
              onClick={handleMenu}
                to={path}
                className={`${
                  // eslint-disable-next-line no-sequences
                  className ? className : "", 
               match? 'border-b-[3px]' : '' }  font-[500] text-desktoplink text-[18px] sm:text-[16px]  lg:text-[18px] md:ml-[20px] font-lato  `}
              >
                {name}
              </Link>
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

