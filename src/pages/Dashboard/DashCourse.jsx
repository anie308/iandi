import React from 'react'
import DashCoursesSection from '../../components/DashComponents/DashCoursesSection'

function DashCourse({updateCourse, setUpdateCourse}) {
  return (
    <div>
      <DashCoursesSection updateCourse={updateCourse} setUpdateCourse={setUpdateCourse}/>
    </div>
  )
}

export default DashCourse