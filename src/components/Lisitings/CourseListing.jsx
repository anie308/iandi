import React from 'react'
import { useEffect } from 'react'
import {courseDetails} from '../../data'
import CourseItem from '../Items/CourseItem'
import '../style.css'
import { useState } from 'react'
import {useCoursesQuery} from '../../services/coursesApi'



function CourseListing() {
    const {data, error, isLoading, isFetching, isSuccess} = useCoursesQuery()
    const courses = data?.courses


 

  return (
    <div>
          {isLoading && <div className='min-w-[280px] max-w-[300]   min-h-[370px] h-[370px] animate-pulse flex flex-col space-y-2'>
            <div className='rounded-[10px] w-full  h-[200px] bg-gray-200'></div>
            <div className='rounded-[10px] w-full  h-full bg-gray-200'></div>
            <div className='rounded-[10px] w-full  h-[80px] bg-gray-200'></div>
          </div> }
          {error && <div className='h-[200px] w-[200px] '>Something went wrong </div>}
          {isSuccess && (
             <div className='shit flex flex-row items-center justify-between overflow-y-auto gap-4 md:grid md:grid-cols-4'>
             {
                 courses
                  .slice(0,4)
                 .map((course) => (
                     <CourseItem key={course.id} course={course}/>
                 ))
                   
                
             }
           </div>
          )}

    </div>
  )
}

export default CourseListing
