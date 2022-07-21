import React from 'react'
import {courseDetails} from '../../data'
import CourseItem from './CourseItem'
import '../style.css'

function CourseListing() {
  return (
    <div className='shit flex flex-row items-center justify-between overflow-y-auto gap-4 md:grid md:grid-cols-4'>
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
