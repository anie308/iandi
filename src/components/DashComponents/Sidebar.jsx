import React from 'react';
import Logo from '../../assets/logo.png';
import {Link, useMatch} from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let match = useMatch(to !== "" ? `/dashboard/` + to + "/*" : "/dashboard");
  return (
    <Link className={`item ${match ? "active" : ""}`} to={to} {...props}>
      {children}
    </Link>
  );
}


function Sidebar({toggle, isToggled}) {
  const navArr = [
    {
      name: "Dashboard",
      to: "",
    },
    {
      name: "Courses",
      to: "courses",
    },
  ]
  return (
    <div className={`${toggle? 'left-0 z-30 lg:left-0':'left-[-100%] lg:left-0'}  absolute lg:relative w-[240px] h-screen transition-left  flex flex-col  justify-between bg-[#33658A]
    `}>
      <div>
      <div className='hidden md:flex w-full items-center justify-left px-[20px] pt-[10px]'>
            <img src={Logo} alt="" />
        </div>
        <div>
          <div>
          {
            navArr.map(({name, to}) => (
              <CustomLink to={to}>
                <div>{name}</div>
              </CustomLink>

            ))
          }
          </div>
          

        </div>
      </div>
        <div className='flex md:hidden '>
            <p className='text-[22px] font-raleway font-[600] '>Welcome (Yushi)</p>
        </div>

    </div>
  )
}

export default Sidebar