import React from 'react'
import { mdRules } from '../../data'

function DashCreateCourse() {
  return (
    <div className='flex flex-col md:flex-row gap-4 px-[10px] md:px-[20px] my-[40px] '>
      <div className='flex-2 bg-gray-200  p-[20px] rounded-[5px]'>
       <div>
        <form action="" className='w-full'>
          <div className='flex flex-col space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[18px] md:text-[25px] font-raleway font-[600]'>Title</label>
            <input type="text" name="" id="" className='h-[45px] rounded-[5px] px-[10px] outline-none mt-[2px]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[18px] md:text-[25px] font-raleway font-[600]'>Meta(short desc.)</label>
            <input type="text" name="" id="" className='h-[45px] rounded-[5px] px-[10px] outline-none mt-[2px]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[18px] md:text-[25px] font-raleway font-[600]'>What you will learn</label>
            <textarea name="" id="" className='h-[200px] rounded-[5px] p-[10px] outline-none mt-[2px]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[18px] md:text-[25px] font-raleway font-[600]'>Who should take this course?</label>
            <textarea name="" id="" className='h-[200px] rounded-[5px] p-[10px] outline-none mt-[2px]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[18px] md:text-[25px] font-raleway font-[600]'>Lessons</label>
            <textarea name="" id="" className='h-[250px] rounded-[5px] p-[10px] outline-none mt-[2px]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[18px] md:text-[25px] font-raleway font-[600]'>Bonus</label>
            <textarea name="" id="" className='h-[100px] rounded-[5px] p-[10px] outline-none mt-[2px] resize-none' />
          </div>
          <div className='flex items-center space-x-3'>
          <input type='checkbox'  name="" id="availability" className='h-[20px] md:h-[30px] w-[20px] md:w-[30px] rounded-[5px] p-[10px] outline-none mt-[2px]' />
            <label htmlFor="availability" className='text-[18px] md:text-[25px] font-raleway font-[600] cursor-pointer'>Availability</label>
            
          </div>

          <div className='flex items-center w-full justify-center md:justify-end space-x-3 mt-[100px]'>
            <button type='submit' className='text-[16px] md:text-[20px] font-[600] font-raleway px-[30px] py-[5px] bg-[#33658A] rounded-[5px] text-white'>Create</button>
            <button type='reset' className='text-[16px] md:text-[20px] font-[600] font-raleway px-[30px] py-[5px] border border-[#33658A] rounded-[5px] text-[#33658A]'>Reset</button>
          </div>
          </div>
        </form>
       </div>
      </div>
      <div className='flex-1  h-full p-[20px] bg-gray-200'>
      <div>
        <h1 className='text-[18px] md:text-[25px] font-[600] font-raleway '>Thumbnail</h1>
        <div className='mt-[10px]'>
          <input type="file" hidden id='thumbnail' />
          <label htmlFor="thumbnail" className='cursor-pointer'>
            <div className="border-[2px] rounded-[5px] border-dashed w-full aspect-video border-[#33658A] flex flex-col justify-center items-center">
              
              <span className='text-[20px]'>Select Thumbnail</span>
              <span className='text-[16px]'>Recommended size</span>
              <span className='text-[16px]'>1280*720</span>
            </div>

          </label>
        </div>

      </div>
      <div className='bg-white mt-[70px] rounded-[5px] p-[20px]'>
        <h1 className='font-[600] font-lato text-[18px] md:text-[25px]'>General Markdown Rules</h1>
        <ul className='mt-[10px] space-y-2'>
          {
            mdRules.map(({title, rule}) => {
              return (
                <li className='text-[16px] md:text-[20px] font-raleway' key={title}>
                  <p className='font-[500]'>{title}</p>
                  <p className='font-[700] break-words'>{rule}</p>
                  </li>
              )
            })
          }
          <li className='text-center'></li>
        </ul>
        
      </div>
      </div>
    </div>
  )
}

export default DashCreateCourse