import React from 'react'
import { courseDetails } from '../../data'
import CourseItem from './CourseItem'

function CoursePageComponent() {
  return (
    <div className='px-[20px] flex flex-col items-center mt-[30px] gap-4'>
    {
        courseDetails.map((course)=> {
            return <CourseItem key={course.id} course={course}/>
        })
    }
</div>
  )
}

export default CoursePageComponent

