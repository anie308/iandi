import { Route , Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Auth/Login';
import AboutUs from './pages/AboutUs';
import Bites from './pages/Bites';
import CourseDetail from './pages/CourseDetail';
import CourseRegister from './pages/CourseRegister';
import Courses from './pages/Courses';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Session from './pages/Session';
import DashboardLayout from './components/Templates/DashboardLayout';
import DashHome from './pages/Dashboard/DashHome';
import CourseWaitlist from './pages/CourseWaitlist';
import WaitlistSuccess from './pages/WaitlistSuccess';
import BitesDetail from './pages/BitesDetail';
import DashCourse from './pages/Dashboard/DashCourse';
import DashBites from './pages/Dashboard/DashBites';
import DashSessions from './pages/Dashboard/DashSessions';
import DashCreateCourse from './pages/Dashboard/DashCreateCourse';
import DashViewCourse from './pages/Dashboard/DashViewCourse';
import DashViewBite from './pages/Dashboard/DashViewBite';
import DashViewSession from './pages/Dashboard/DashViewSession';
import DashCreateBite from './pages/Dashboard/DashCreateBite';
import DashCreateSession from './pages/Dashboard/DashCreateSession';
import UpdateBite from './pages/Dashboard/UpdateBite';
import UpdateCourse from './pages/Dashboard/UpdateCourse';
import UpdateSession from './pages/Dashboard/UpdateSession';
import SessionDetail from './pages/SessionDetail';
import Support from './pages/Support';
import Testimony from './pages/Testimony';
import  {useSelector} from 'react-redux'
import RegWait from './pages/Dashboard/RegWait';
import Settings from './pages/Dashboard/Settings';


function App() {
  
  const user = useSelector((state) => state.auth)
  
  return (
    <>
     {/* <NavBar/> */}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/sessions" element={<Session />} />
        <Route path="/sessions/:slug" element={<SessionDetail />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path='/course/register' element={<CourseRegister />} />
        <Route path='/course/register/success' element= {<RegistrationSuccess />} />
        <Route path='/course/waitlist' element={<CourseWaitlist/>}/>
        <Route path='/course/waitlist/success' element={<WaitlistSuccess/>}/>
        <Route path="/bites" element={<Bites />} />
        <Route path="/bites/:slug" element={<BitesDetail />} />
        <Route path="/*" element={<NotFound/>} />
        <Route path="/support" element={<Support/>}/>
        <Route path="/stories/:slug" element={<Testimony/>} />

        {user ?   <Route
         path='/dashboard/'
         element={
          <DashboardLayout/>
        }
         >
          <Route path='home' element={<DashHome/>}/>
          <Route path='courses' element={<DashCourse/>}/>
          <Route path='course/:slug' element={<DashViewCourse/>}/>
          <Route path ='sessions' element={<DashSessions/>}/>
          <Route path ='reg-wait' element={<RegWait/>}/>
          <Route path='bites' element={<DashBites/>}/>
          <Route path='bite/:slug' element={<DashViewBite/>}/>
          <Route path='session/:slug' element={<DashViewSession/>}/>
          <Route path='create-course' element={<DashCreateCourse/>}/>
          <Route path='create-bite' element={<DashCreateBite/>}/>
          <Route path='create-session' element={<DashCreateSession/>}/>
          <Route path='update-bite/:slug' element={<UpdateBite/>}/>
          <Route path='update-course/:slug' element={<UpdateCourse/>}/>
          <Route path='update-session/:slug' element={<UpdateSession/>}/>
          <Route path="settings" element={<Settings/>} />
         </Route> 
        : <Route path="/"  element={<Home/>} />}
      

      </Routes>
      <ToastContainer/>
     
    </>
  );
}

export default App;
