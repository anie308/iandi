import React from 'react'
import TestimonialListing from '../Lisitings/TestimonialListing'

function TestimonialSection() {
  return (
    <div className='w-full mt-[50px] lg:mt-[100px] mb-[40px]'>
        <div className='w-full px-[20px]'>
            <p className='font-raleway font-[800] text-[24px] lg:text-[35px] text-left md:text-center'>Unique stories, real <br className='hidden lg:block'/> experiences. From your peers <br className='hidden lg:block'/> all around the world.</p>
        </div>
        <div className='px-[20px] lg:px-[90px] mt-[40px] '>
          <TestimonialListing/>
        </div>
    </div>
  )
}

export default TestimonialSection