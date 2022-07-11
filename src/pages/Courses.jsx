import React from 'react'
import CoursePageComponent from '../components/CoursePageComponent'
import CoursePageHero from '../components/CoursePageHero'
import NavBar from '../components/NavBar'


function Courses(){
    return(
       <div>
        <NavBar/>
        <CoursePageHero/>
        <CoursePageComponent/>
       </div>
    )
}

export default Courses