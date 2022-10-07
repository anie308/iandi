import React from 'react'
import { useParams } from 'react-router-dom'
import CourseForm from '../../components/DashComponents/Forms/CourseForm'
import { default as api } from "../../services/apiSlice";

function UpdateCourse({updateCourse}) {
   
  const {slug} = useParams()
  const { data } = api.useCoursesQuery();
  const courses = data?.courses;

  const courseToUpdate = courses?.find(item =>item.slug  === slug)

  const handleUpdate = (data) => {
    
  }

  
  return (
    <div><CourseForm updateCourse={updateCourse} courseToUpdate={courseToUpdate} onUpdate={handleUpdate}/></div>
  )
}

export default UpdateCourse