import React from "react";
import BiteItem from "../Items/BiteItem";
import { useBitesQuery } from "../../services/bitesApi";
import "../style.css";



function BiteListing() {
  const { data, error, isLoading, isSuccess } = useBitesQuery();
  const bites = data?.posts;




return (
  <div>
        {isLoading && <div className='min-w-[280px] max-w-[300]   min-h-[370px] h-[370px] animate-pulse flex flex-col space-y-2'>
          <div className='rounded-[10px] w-full  h-[200px] bg-gray-200'></div>
          <div className='rounded-[10px] w-full  h-full bg-gray-200'></div>
          <div className='rounded-[10px] w-full  h-[80px] bg-gray-200'></div>
        </div> }
        {error && <div className='h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'>Something went wrong </div>}
        {isSuccess && (
           <div >
          {
            bites.length === 0 ? (
              
               <div className='h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'> No Posts Yet</div>
               
            
            ) : (
              <div className='shit flex flex-row items-center justify-between overflow-y-auto gap-4 md:grid md:grid-cols-4'>
                {
                   bites
                   .slice(0,4)
                  .map((course) => (
                      <BiteItem key={course.id} course={course}/>
                  ))
                }
              </div>
             
                  
            )
          }
         </div>
        )}

  </div>
)
}

export default BiteListing
