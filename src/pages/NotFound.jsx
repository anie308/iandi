import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <NavBar/>
      <div className='my-[50px] md:my-[100px] flex flex-col justify-center items-center w-full'>
    <p className='font-[800]  text-[18px] md:text-[28px] font-raleway text-[#909DB0] text-center leading-[40px]'>We couldn’t find this page.</p>
    <p className='font-[800] text-[#333333] text-[15px] md:text-[20px] font-raleway leading-[28px] text-center mt-[30px]'>Development is a journey of discovery</p>
    <p className='font-[400] font-lato text-[14px] leading-[20px] text-center mt-[10px]'>Sometimes we get lost, but that’s okay.</p>
    <p className='font-[700] font-lato text-[16px] text-center mt-[40px]'>You can always find inspirations on our <Link className='underline decoration-[#4395C1] text-[#4395C1] underline-offset-3' to='/'>Homepage</Link>, it’s usually nicer than this page.</p>

        <Link to='/'>    <button className='bg-[#4395C1] px-[50px] md:px-[100px] py-[10px] rounded-[10px] mt-[20px] text-white text-[14px] font-lato'>Back to Home</button>
</Link>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound