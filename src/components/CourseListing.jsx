import React from 'react'
import {courseDetails} from '../data'
import CourseItem from './CourseItem'
import './style.css'

function CourseListing() {
  return (
    <div className='shit flex flex-row overflow-y-auto gap-4 cols-1 sm:gap-2 sm:grid-cols-2 md:gap-3 md:grid-cols-3 lg:gap-3 lg:grid-cols-4 '>
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
