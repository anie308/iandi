import React from 'react'
import {courseDetails} from '../../data'
import Thumbnail from '../../assets/thumbnail.png'


function DashCourses() {

  
  return (
    <div className='px-[10px] mt-[20px] '>
      <div>
        <p className='text-[25px] font-lato font-[600]'>Courses</p>
      </div>
      <div className='px-[20px] grid gap-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 md:gap-5 mt-[20px]'>
          {
            courseDetails.map(({id, name, meta, status})=> (
              <div className='flex flex-col   shadow rounded-[5px] md:min-h-[130px]' key={id}>
                <div>
                  <img src={Thumbnail} alt="" className='h-[150px] md:h-[130px]  md:min-w-[130px] w-full rounded-t-[5px] aspect-video'/>
                </div>
                <div className='flex flex-col justify-between  h-full  p-2'>
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