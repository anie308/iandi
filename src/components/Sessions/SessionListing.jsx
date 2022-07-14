import React from 'react'
import { Sessions } from '../../data'
import SessionItem from './SessionItem'

function SessionListing() {
  return (
    <div className='shit flex flex-row  items-center justify-between overflow-y-auto gap-4 md:grid md:grid-cols-4'>
    {
        Sessions
        .slice(0,4)
        .map((session) => (
            <SessionItem key={session.id} session={session}/>
        ))
          
       
    }
</div>
  )
}

export default SessionListing