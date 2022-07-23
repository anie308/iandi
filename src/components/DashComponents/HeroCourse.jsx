import React from 'react'
import {courseDetails} from '../../data'
import Thumbnail from '../../assets/thumbnail.png'
import {Link } from 'react-router-dom'

function HeroCourse() {
  return (
    <div className='flex-1 w-full bg-gray-200 p-[10px] rounded-[5px]'>
         <div className="flex items-center justify-between">
        <div className="text-[18px] font-lato ">Recent Courses</div>
        <div className="text-[16px] font-lato"><Link to='/dashboard/waitlist'>See All</Link></div>
      </div>
        <div className='flex flex-col space-y-4 mt-[20px]'>
            {
                courseDetails
                .slice(0,4)
                .map(({id, name, meta, status})=> (
                    <div className='bg-white rounded-[5px] flex items-center h-full' key={id}>
                        <div className='flex-1'>
                            <img src={Thumbnail} alt="" className='h-[100px] w-[100px] md:w-[200px] object-cover'/>
                        </div>
                        <div className='h-[100px] pl-[10px] flex flex-col   w-full flex-2 py-[10px]'>
                            <p className='font-lato text-[16px] font-[600]'>{name}</p>
                            <p className=' w-full text-[14px] mb-[5px]'>{meta.substring(0,28) + '...'}</p>
                            <p className='bg-red-200 text-red-400 px-[5px] text-[12px] rounded-[10px] w-fit'>{status}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HeroCourse