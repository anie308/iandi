import React from 'react'
import CoursePageComponent from '../components/PageSections/CoursePageComponent'
import CoursePageHero from '../components/Hero/CoursePageHero'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'



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