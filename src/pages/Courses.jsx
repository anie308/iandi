import React from 'react'
import CoursePageComponent from '../components/Courses/CoursePageComponent'
import CoursePageHero from '../components/Courses/CoursePageHero'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function Courses(){
    return(
       <div>
        <NavBar/>
        <CoursePageHero/>
        <CoursePageComponent/>
        <Footer/>
       </div>
    )
}

export default Courses