import React from 'react'
import {courseDetails} from '../../data'
import Thumbnail from '../../assets/thumbnail.png'


function DashCourses() {
  return (
    <div className='px-[10px] mt-[20px] '>
      <div>
        <p className='text-[25px] font-lato font-[600]'>Courses</p>
      </div>
      <div className='px-[20px] grid gap-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 md:gap-5 mt-[20px]'>
          {
            courseDetails.map(({id, name, meta, status})=> (
              <div className='flex shadow rounded-[5px] min-h-[130px]' key={id}>
                <div>
                  <img src={Thumbnail} alt="" className='h-[130px] min-w-[130px] object-cover rounded-l-[5px]'/>
                </div>
                <div className='flex flex-col justify-between w-full h-full rounded-r-[5px] p-2'>
                  <div className='flex flex-col'>
                    <div className=' w-full  py-[1px] font-[600] font-lato'>{name}</div>
                    <div className=' w-full py-[1px] break-words text-[14px]'>{meta.substring(0,100)}</div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex-1 text-center bg-green-500 py-[4px] rounded-[5px] shadow text-white font-[500] cursor-pointer'>Edit</div>
                    <div className='flex-1 text-center bg-red-500 py-[4px] rounded-[5px] shadow text-white font-[500] cursor-pointer'>Delete</div>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default DashCourses