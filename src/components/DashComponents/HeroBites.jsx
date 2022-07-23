import React from 'react'
import {biteReads} from '../../data'
import Thumbnail from '../../assets/thumbnail.png'
import {Link } from 'react-router-dom'

function HeroBites() {
  return (
    <div className='flex-1 w-full bg-gray-200 px-[10px] py-[15px] rounded-[5px] mt-[20px]'>
    <div className="flex items-center justify-between">
   <div className="text-[18px] font-lato ">Recent Bites</div>
   <div className="text-[16px] font-lato"><Link to='/dashboard/bites'>See All</Link></div>
 </div>
   <div className='flex flex-col space-y-4 mt-[30px]'>
       {
           biteReads
           .slice(0,4)
           .map(({id, title, content})=> (
               <div className='bg-white rounded-[5px] flex items-center h-full' key={id}>
                   <div className='flex-1'>
                       <img src={Thumbnail} alt="" className='h-[100px]  w-[100px] md:w-[200px] object-cover'/>
                   </div>
                   <div className='h-[100px] px-[10px] flex flex-col   w-full flex-2 py-[10px]'>
                       <p className='font-lato text-[14px] font-[600]'>{title.substring(0,20) + '...'}</p>
                       <p className=' w-full text-[14px] mb-[5px] '>{content.substring(0,30) + '...'}</p>
                   </div>
               </div>
           ))
       }
   </div>
</div>
  )
}

export default HeroBites