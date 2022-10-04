import React from 'react'
import CourseForm from '../../components/DashComponents/Forms/CourseForm'
import {default as  api} from '../../services/apiSlice'

function DashCreateCourse() {
  const [addCourse] = api.useCreateCourseMutation()
  const handleSubmit = (data) => {
    console.log(data)
    addCourse(data).unwrap()
  }

  return (
    <CourseForm onSubmit={handleSubmit}/>
  )
}

//
export default DashCreateCourse