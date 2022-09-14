import React from 'react'
import { useState } from 'react'
import {  AiFillFileText } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { default as api } from "../../services/waitlistApi";
import { default as reg } from "../../services/courseRegApi";
import  moment from 'moment'



function DashRegWaitSection() {
  const { data, error, isFetching, isSuccess } = api.useWaitlistsQuery();
  const { data: registered, error : err, isFetching: loading, isSuccess : done } = reg.useGetAllRegisteredQuery();
  
  const waitlists = data?.waitlists
  const courseregs = registered?.courseRegs
  console.log(courseregs)
    const filter =['Course Registrations',  'Course Waitlists',
    ]
    const update = ['Registered', 'Account Created']
    const [regFilter, setRegFilter] = useState(false)
    const [filterVal, setFilterVal] = useState(filter[0])
    const isRegistered = true

  return (
    <div className='p-[15px]'>
        <div className="flex items-center w-full justify-between my-[20px]">
        <div>
        <p className=' font-[800] text-[32px] font-raleway'>Learners</p>
        </div>
        <div className='w-[445px] h-[40px]'>
          <form action="" className='bg-[#FAFAFA] rounded-[5px] p-[8px_10px] h-full w-full flex items-center justify-between'>
            <input type="text" className='bg-transparent w-full text-[#7D7D7D] placeholder:text-[#7D7D7D] outline-none border-none' placeholder='Search name, email, status' />
            <button type='submit'><FaSearch className='text-[#7D7D7D] text-[18px]'/></button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
            <div className='relative  bg-[#FAFAFA] '>
               <div className='w-[200px] h-[40px] flex items-center justify-between rounded-[5px]  border cursor-pointer  px-[10px] text-[#333333]' onClick={() => setRegFilter(!regFilter)}>
               <p className='font-lato text-[14px] font-[400] '>{filterVal}</p>
               <BsChevronDown className='text-[#333333] text-[18px]' />
               </div>
               {
                regFilter && (
                    <div className='absolute w-[200px] z-10 shadow mt-[10px] bg-[#FAFAFA] flex item-center flex-col justify-center'>
                    {
                        filter.map((option, index) => (
                               <p className='w-[200px] flex items-center justify-start h-[40px] p-[2px_5px] cursor-pointer hover:bg-gray-100 font-lato text-[14px] font-[400] ' key={index} onClick={() => {
                                setRegFilter(!regFilter)
                                setFilterVal(option)

                               }}>{option}</p> 
                        ))
                    }
                </div>
                )
               }
            </div>
          
          <div className="flex items-center justify-center text-white bg-[#33658A] px-[10px] w-[125px] h-[40px] rounded-[5px] space-x-2"><AiFillFileText className="text-white "/> <p className='font-lato text-[14px] font-[400]'>Export</p></div>
        </div>
      </div>
      <div className='w-full '>
        <p className='uppercase font-montserrat font-[400] text-[14px] '>{filterVal}</p>
        <div className='flex flex-col mt-[15px] space-y-5'>
            <div >
                {
                    filterVal === 'Course Registrations' ? (
                      <div className='grid grid-cols-6 items-center bg-[#FAFAFA] border shadow shadow-[#33333329] p-[12px_20px] rounded-[8px]'>
                          <div className='font-[400] font-montserrat uppercase text-[12px] '>Status</div>
                <div className='font-[400] font-montserrat uppercase text-[12px] '>Registered Date</div>
                <div className='font-[400] font-montserrat uppercase text-[12px] '>Name</div>
                <div className='font-[400] font-montserrat uppercase text-[12px] '>Email</div>
                <div className='font-[400] font-montserrat uppercase text-[12px] '>Ocuupation</div>
                <div className='font-[400] font-montserrat uppercase text-[12px] '>Country</div>
                      </div>
                    ) : (
                        <div className='grid grid-cols-6 items-center bg-[#FAFAFA] border shadow shadow-[#33333329] p-[12px_20px] rounded-[8px]'>
                        <div className='font-[400] font-montserrat uppercase text-[12px] '>Waitlist Date</div>
              <div className='font-[400] font-montserrat uppercase text-[12px] '>Name</div>
              <div className='font-[400] font-montserrat uppercase text-[12px] '>Email</div>
              <div className='font-[400] font-montserrat uppercase text-[12px] ' >Course Waitlisted</div>
                    </div>
                    )
                }
                
            </div>
            <div>
           {
            filterVal === 'Course Registrations' ?  (
                <div className=' '>
               {loading && (
                 <div className="h-[50px] w-full bg-gray-200 rounded-[5px] font-raleway font-[700] text-[15px] flex items-center justify-center animate-pulse">
                 Loading...
               </div>
               )}

               {err && (
                 <div className="h-[50px] w-full bg-gray-200 rounded-[5px] font-raleway font-[700] text-[15px] flex items-center justify-center">
                 Something went wrong{" "}
               </div>
               )}

               {
                done && (
                <div>
                  {
                    courseregs.length ===0 ? (
                      <div className="h-[50px] w-full bg-gray-200 rounded-[5px] font-raleway font-[700] text-[15px] flex items-center justify-center">
                No Course Registrants Yet
               </div>
                    ) : (
                      <>
                      <div className=' bg-[#FAFAFA] border shadow shadow-[#33333329]  rounded-[8px] space-y-2' >
                      {
                        courseregs.map(({id, fullname, email, occupation, country, createdAt}) => (
                        <div className=' grid grid-cols-6 items-center font-lato text-[14px] font-[400] hover:bg-gray-100 p-[12px_20px] cursor-pointer'>
                          <div></div>
                          <div>{moment(createdAt).format('LL')}</div>
                          <div>{fullname  }</div>
                          <div>{email  }</div>
                          <div>{occupation  }</div>
                          <div>{country  }</div>
                          
                        </div>  
                        
                      
                        ))
                      }
                      </div>
                      </>
                    )
                  }
                </div>
                  
                )
               }
            </div>
            ) : (
                <div className='grid grid-cols-6 items-center bg-[#FAFAFA] border shadow shadow-[#33333329] p-[12px_20px] rounded-[8px] '>
                <div>loll</div>
                <div>loll</div>
                <div>loll</div>
                <div>loll</div>
                
            </div>
            )
           }
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default DashRegWaitSection
