import React from 'react'
import SessionItem from '../Items/SessionItem'
import { default as api } from "../../services/apiSlice";


function SessionListing() {
  const { data, error, isLoading, isSuccess } = api.useSessionsQuery();
  const sessions = data?.sessions;
  return (
   <div>
     {isLoading && <div className='w-full  bg-gray-200   h-[300px] animate-pulse flex items-center justify-center rounded-[10px] font-raleway font-[700] text-[20px]'>
          Loading...
         
        </div> }
        {error && <div className='h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'>Something went wrong </div>}
     <div>
     {isSuccess && (
           <div >
          {
            sessions.length === 0 ? (
              
               <div className='h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'> No Sessions Yet</div>
               
            
            ) : (
              <div className='shit flex flex-row items-center justify-between overflow-y-auto gap-4 xl:grid xl:grid-cols-4'>
                {
                   sessions
                   .slice(0,4)
                  .map((session) => (
                    <SessionItem key={session.id} session={session}/>
                  ))
                }
              </div>
             
                  
            )
          }
         </div>
        )}
  
</div>
   </div>
  )
}

export default SessionListing