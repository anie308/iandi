import React from 'react'
import CourseItem from '../Items/CourseItem'
import '../style.css'
import { default as api } from "../../services/apiSlice";



function CourseListing() {
    const {data, error, isLoading,  isSuccess} = api.useCoursesQuery()
    const courses = data?.courses


 

  return (
    <div>
          {isLoading && <div className='w-full  bg-gray-200   h-[300px] animate-pulse flex items-center justify-center rounded-[10px] font-raleway font-[700] text-[20px]'>
          Loading...
         
        </div> }
          {error && <div className='h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'>Something went wrong </div>}
          {isSuccess && (
             <div >
            {
              courses.length === 0 ? (
                
                 <div className='h-[200px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'> No Courses Yet</div>
                 
              
              ) : (
                <div className='shit flex flex-row items-center justify-between overflow-y-auto gap-4 md:grid md:grid-cols-4'>
                  {
                      courses
                      .slice(0,4)
                     .map((course) => (
                         <CourseItem key={course.id} course={course}/>
                     ))
                  }
                </div>
              
                    
              )
            }
           </div>
          )}

    </div>
  )
}

export default CourseListing
