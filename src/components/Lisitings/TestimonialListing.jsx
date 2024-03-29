import React from 'react'
import { Testimonials } from '../../data'
import TestimonialItem from '../Items/TestimonialItem'

function TestimonialListing() {
  return (
    <div className='shit flex flex-row  items-center justify-between overflow-y-auto gap-4 xl:grid xl:grid-cols-4'>
    {
        Testimonials
        .slice(0,4)
        .map((testimony) => (
            <TestimonialItem key={testimony.id} testimony={testimony}/>
        ))
          
       
    }
</div>
  )
}

export default TestimonialListing