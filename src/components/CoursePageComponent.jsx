import React from 'react'
import { courseDetails } from '../data'
import CourseItem from './CourseItem'

function CoursePageComponent() {
  return (
    <div className='px-[30px] grid grid-cols-4 gap-4'>
    {
        courseDetails.map((course)=> {
            return <CourseItem key={course.id} course={course}/>
        })
    }
</div>
  )
}

export default CoursePageComponent

//0270038708