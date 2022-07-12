import React from 'react'
import {courseDetails} from '../../data'
import CourseItem from './CourseItem'
import '../style.css'

//gap-4 sm:grid sm:gap-2 sm:grid-cols-2 md:gap-3 md:grid-cols-3 lg:gap-3 lg:grid-cols-4 w-full
function CourseListing() {
  return (
    <div className='shit flex flex-row items-center justify-between overflow-y-auto gap-4 '>
        {
            courseDetails
            .slice(0,4)
            .map((course) => (
                <CourseItem key={course.id} course={course}/>
            ))
              
           
        }
    </div>
  )
}

export default CourseListing
