import React from 'react'
import { default as api } from "../../services/apiSlice";
import { AiOutlineEye, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Thumbnail from '../../assets/thumbnail.png'
import { toast } from 'react-toastify';




function DashSessionSection() {
    const { data, error, isLoading, isSuccess } = api.useSessionsQuery();
    const [deleteSession] = api.useDeleteSessionMutation()
    const sessions = data?.sessions;
    console.log(sessions)

    function handleDelete(id){
      try{
        deleteSession(id)
        console.log(id)
        toast.success('Session Deleted Successfully')
      } catch(err){
        toast.error(error.data.error)
      }
      
    }

    
  return (
    <div className="px-[15px] ">
    <div className="flex items-center w-full justify-between my-[20px]">
      <div>
      <p className=' font-[800] text-[32px] font-raleway'>Live Sessions</p>
      </div>
      <div className='w-[445px] h-[40px]'>
        <form action="" className='bg-[#FAFAFA] rounded-[5px] p-[8px_10px] h-full w-full flex items-center justify-between'>
          <input type="text" className='bg-transparent w-full text-[#7D7D7D] placeholder:text-[#7D7D7D] outline-none border-none' placeholder='Search post title' />
          <button type='submit'><FaSearch className='text-[#7D7D7D] text-[18px]'/></button>
        </form>
      </div>
      <div className="flex items-center space-x-4">
        
        <Link to='/dashboard/create-session'>
        <div className="flex items-center text-white bg-[#33658A] px-[10px] w-[125px] h-[40px] rounded-[5px] space-x-2"><AiOutlinePlus className="text-white "/> <p className='font-lato text-[14px] font-[400]'>New  Session</p></div>
        </Link>
      </div>
    </div>
    <div className='mt-[20px]'>
      {isLoading && (
        <div className="h-[125px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center animate-pulse">
          Loading...
        </div>
      )}
      {error && (
        <div className="h-[125px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center">
          Something went wrong{" "}
        </div>
      )}

      {isSuccess && (
        <div>
          {sessions.length === 0 ? (
            <div className="h-[125px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center">
              {" "}
              No Sessions Yet
            </div>
          ) : (
            <div className="flex  gap-5 flex-col w-full">
              {sessions?.map(({ id, slug, title, meta,  thumbnail }) => (
                <div
                  className="flex  shadow rounded-[5px] p-[10px] bg-[#FAFAFA]"
                  key={id}
                >
                  <div>
                    <img
                      src={ thumbnail ||Thumbnail}
                      alt=""
                      className="h-[100px] md:h-[100px]  md:min-w-[160px] w-full  aspect-video"
                    />
                  </div>
                  <div className="flex pl-[10px] w-full">
                    <div className="flex flex-col justify-between h-full py-[5px] grow">
                      <p className="font-[700] text-[18px] font-raleway capitalise">
                        {title}
                      </p>
                      <p className="font-[400] text-[14px] font-lato">
                        {meta}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1  flex space-x-2">
                    <div className="border border-[#33658A] p-[5px] h-fit rounded-[5px]">
                      <Link to={`/dashboard/session/${slug}`}>
                        <AiOutlineEye className="text-[#33658A]" />
                      </Link>
                    </div>
                    <div className="border border-[#33658A] p-[5px] h-fit rounded-[5px]">
                      <Link to={`/dashboard/update-session/${slug}`}>
                        <MdEdit className="text-[#33658A]" />
                      </Link>
                    </div>
                    <div className="border border-[#DB162F] p-[5px] h-fit rounded-[5px]">
                      <div  onClick={() => handleDelete(id)} className='cursor-pointer'>
                        <AiFillDelete className="text-[#DB162F]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  </div>
  )
}

export default DashSessionSection