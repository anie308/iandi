import React from 'react'
import CoursePageComponent from '../components/Courses/CoursePageComponent'
import CoursePageHero from '../components/Courses/CoursePageHero'
import NavBar from '../components/NavBar'


function Courses(){
    return(
       <div>
        <NavBar/>
        <CoursePageHero/>
        {/* <CoursePageComponent/> */}
       </div>
    )
}

export default Courses