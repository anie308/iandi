import React from 'react'
import TestimonialListing from './TestimonialListing'

function TestimonialSection() {
  return (
    <div className='w-full mt-[50px] lg:mt-[100px] mb-[40px]'>
        <div className='w-full px-[20px]'>
            <p className='font-raleway font-[800] text-[24px] lg:text-[35px] text-center'>Unique stories, real <br className='hidden lg:block'/> experiences. From your peers <br className='hidden lg:block'/> all around the world.</p>
        </div>
        <div className='px-[20px] lg:px-[100px] mt-[40px] '>
          <TestimonialListing/>
        </div>
    </div>
  )
}

export default TestimonialSection