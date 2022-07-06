import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { courseDetails } from "../data";


function CourseDetail() {
    const {slug} = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        let course = courseDetails.find((course) => course.slug === slug);

        if(course){
            setCourse(  course );
        }
    }, [slug])
  return (
    <div className='min-h-screen max-h-screen flex items-center justify-center w-full'>
        {course? (
            <div className='h-full font-[700] font-raleway text-[25px] w-full text-center'>{course.name}</div>
        ): (
            <div className='h-full font-[700] font-raleway text-[25px] w-full text-center'>
                Hello Motherfucker!!
            </div>
        )}
    </div>
  )
}

export default CourseDetail