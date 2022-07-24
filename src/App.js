import { Route , Routes } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Login from './components/Login';
import AboutUs from './pages/AboutUs';
import Bites from './pages/Bites';
import CourseDetail from './pages/CourseDetail';
import CourseRegister from './pages/CourseRegister';
import Courses from './pages/Courses';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Session from './pages/Session';
import { selectUser } from './redux/userSlice';
import DashboardLayout from './components/Templates/DashboardLayout';
import DashHome from './pages/Dashboard/DashHome';
import CourseWaitlist from './pages/CourseWaitlist';
import WaitlistSuccess from './pages/WaitlistSuccess';
import BitesDetail from './pages/BitesDetail';
import DashCourse from './pages/Dashboard/DashCourse';
import DashCreateCourse from './pages/Dashboard/DashCreateCourse';


function App() {
  const user =useSelector(selectUser);

  
  return (
    <>
     
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Session />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path='/course/register' element={<CourseRegister />} />
        <Route path='/course/register/success' element= {<RegistrationSuccess />} />
        <Route path='/course/waitlist' element={<CourseWaitlist/>}/>
        <Route path='/course/waitlist/success' element={<WaitlistSuccess/>}/>
        <Route path="/bites" element={<Bites />} />
        <Route path="/bites/:slug" element={<BitesDetail />} />
        <Route path="/*" element={<NotFound/>} />

        {user ?   <Route
         path='/dashboard'
         element={
          <DashboardLayout/>
        }
         >
          <Route path='' element={<DashHome/>}/>
          <Route path='courses' element={<DashCourse/>}/>
          <Route path='create-course' element={<DashCreateCourse/>}/>
         </Route> 
        : <Route path="/"  element={<Home/>} />}
      

      </Routes>
     
    </>
  );
}

export default App;
