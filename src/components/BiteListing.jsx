import React from 'react'
import { biteReads } from '../data'
import BiteItem from './BiteItem'

function BiteListing() {
  return (
    <div className='shit flex flex-row overflow-y-auto gap-4 cols-1 sm:gap-2 sm:grid-cols-2 md:gap-3 md:grid-cols-3 lg:gap-3 lg:grid-cols-4 '>
    {
        biteReads
        .slice(0,4)
        .map((course) => (
            <BiteItem key={course.id} course={course}/>
        ))
          
       
    }
</div>
  )
}

export default BiteListing