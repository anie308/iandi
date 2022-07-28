import React from 'react'
import Thumbnail from '../../assets/thumbnail.png'
import { default as api } from "../../redux/apiSlice";
import {Link} from 'react-router-dom'


function DashBitesSection() {
    const { data, isFetching, isSuccess, isError } = api.useGetBitesQuery();

    const bites = data?.posts;
  
    console.log(bites);
  
    let biteList;
    if (isFetching) {
      
    biteList = <div className="h-[150px] w-full text-center flex items-center justify-center text-[18px] font-lato">Loading...</div>;
  } else if (isSuccess) {
    biteList =  bites.map((bite)=> (
        <div className='flex flex-col w-[280px]  shadow rounded-[5px] md:min-h-[130px]' key={bite.id}>
          <div>
            <img src={bite.thumbnail || Thumbnail} alt={bite.title} className='h-[150px] md:h-[130px]  md:min-w-[130px] w-full rounded-t-[5px] aspect-video'/>
          </div>
          <div className='flex flex-col justify-between  h-full  p-2'>
            <div className='flex flex-col'>
              <div className=' w-full  font-[600] font-lato'>{bite.title}</div>
              <div className=' w-full py-[1px] break-words text-[14px] my-[5px]'>{bite.content.substring(0,100)}</div>
            </div>
            <div className='flex items-center gap-4'>
             <Link to={`/dashboard/update-bite/${bite.slug}`} className='flex-1 '>
             <div className='text-center bg-green-500 py-[4px] rounded-[5px] shadow text-white font-[500] cursor-pointer'>Edit</div>
             </Link>
              <div className='flex-1 text-center bg-red-500 py-[4px] rounded-[5px] shadow text-white font-[500] cursor-pointer'>Delete</div>
            </div>
          </div>
        </div>
      ))
  } else if (isError) {
    biteList = (
      <div className="h-[150px] w-full text-center flex items-center justify-center text-[18px] font-lato">
        Could not get Bites
      </div>
    );
  }
  return (
    <div className='px-[10px] mt-[20px] '>
    <div>
      <p className='text-[25px] font-lato font-[600]'>Courses</p>
    </div>
    <div className='px-[20px] grid gap-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 md:gap-5 mt-[20px]'>
      {biteList}
        
    </div>
  </div>
  )
}

export default DashBitesSection