import React from "react";
import BiteItem from "../Items/BiteItem";
import { default as api } from "../../services/apiSlice";
import "../style.css";


function BiteListing() {
  const { data, error, isLoading, isSuccess } = api.useBitesQuery();
  const bites = data?.posts;




return (
  <div>
        {isLoading && <div className='w-full  bg-gray-200   h-[300px] animate-pulse flex items-center justify-center rounded-[10px] font-raleway font-[700] text-[20px]'>
          Loading...
         
        </div> }
        {error && <div className='h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'>Something went wrong </div>}
        {isSuccess && (
           <div >
          {
            bites.length === 0 ? (
              
               <div className='h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'> No Posts Yet</div>
               
            
            ) : (
              <div className='shit flex flex-row items-center justify-between overflow-y-auto gap-4 space-x-2 md:grid md:grid-cols-4'>
                {
                   bites
                   .slice(0,4)
                  .map((bite) => (
                      <BiteItem key={bite.id} bite={bite}/>
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

