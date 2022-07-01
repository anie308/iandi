import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { navLinks } from "../data";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row  bg-primary relative items-center justify-between md:px-[35px] md:py-[20px]">
      <div className="flex justify-between items-center w-full md:w-fit py-[20px] px-[20px] md:p-0">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex md:hidden">
          <AiOutlineMenu
            className="text-[25px] font-[300] cursor-pointer"
            onClick={handleMenu}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "hidden  md:flex" : "flex"
        } fixed top-0 md:relative flex-col h-screen md:h-fit bg-primary md:flex-row w-full md:w-fit p-[20px] md:p-0`}
      >
        <div className="flex md:hidden w-full   items-center justify-end ">
          <FaTimes
            className=" text-[30px] cursor-pointer font-[300]"
            onClick={handleMenu}
          />{" "}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center h-full md:h-fit space-y-4 md:space-y-0">
        {navLinks.map(({ id, name, path, className }) => (
          <div key={id}>
            <Link
              to={path}
              className={`${
                className ? className : ""
              } font-[400] text-desktoplink text-[25px] md:text-[20px] md:ml-[20px] font-lato `}
            >
              {name}
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

{
  /* 

<div className="h-full flex flex-col md:flex-row items-center justify-center ">
<div className="bg-blue-200 h-full w-full flex flex-col md:flex-row justify-center md:justify-between  items-center text-center">
 <div className="flex flex-col md:flex-row">
  {
      navLinks.map(({id, name, path}) => (
      <div key={id}>
          <Link to={path} className='font-[400] text-links text-[25px]'>{name}</Link>
      </div>    
      ))
  }
 </div>
</div>
</div> */
}
