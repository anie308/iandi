import React from 'react';
import Logo from '../../assets/logo.png';
import {Link, useMatch} from 'react-router-dom';




function Sidebar({toggle, isToggled}) {
  const handleToggle = ()=> {
    isToggled(!toggle)
  }

  function CustomLink({ children, to, ...props }) {
    let match = useMatch(to !== "" ? `/dashboard/` + to  : "/dashboard");
    return (
      <Link className={`item ${match ? "border-l-[5px] border-[#FAFAFA] text-white" : ""} text-[16px] font-raleway font-[700]   w-full my-[20px] pl-[10px] md:pl-[20px] `} to={to} {...props} onClick={handleToggle}>
        {children}
      </Link>
    );
  }
  const navArr = [
    {
      name: "Dashboard",
      to: "",
    },
    {
      name: "Courses",
      to: "courses",
    },
    {
      name: "Bite-sized Reads",
      to: "courses",
    },
    {
      name: "Live Sessions",
      to: "sessions",
    },
    {
      name: "Registrations and Waitlists",
      to: "registrations",
    },
   
  ]
  return (
    <div className={`${toggle? 'left-0 z-30 lg:left-0':'left-[-100%] lg:left-0'}  absolute lg:relative min-w-[240px] max-w-[240px] h-screen transition-left  flex flex-col  justify-between bg-[#33658A] pt-[10px]
    `}>
      <div>
      <div className='hidden md:flex w-full items-center justify-start px-[20px] pt-[10px]  '>
            <img src={Logo} alt="" />
        </div>
        <div>
          <div className='mt-[10px] md:mt-[40px] flex flex-col w-full'>
          {
            navArr.map(({name, to}) => (
              <CustomLink to={to} key={to}>
               <div className='flex items-center' >
                <div> {name}</div>
               </div>

              </CustomLink>

            ))
          }
          </div>
          

        </div>
      </div>
        <div className='flex md:hidden '>
            <p className='text-[20px] font-raleway font-[600] '>Welcome (Yushi)</p>
        </div>

    </div>
  )
}

export default Sidebar