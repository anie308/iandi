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
import DashHome from './components/DashboardHome/DashHome';


function App() {
  const user =useSelector(selectUser);

  
  return (
    <>
     
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Session />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/iandi-admin" element={<Login />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path='/course/register' element={<CourseRegister />} />
        <Route path='/course/register/success' element= {<RegistrationSuccess />} />
        <Route path="/bites" element={<Bites />} />
        <Route path="*" element={<NotFound/>} />

        {user ?   <Route
         path='/dashboard'
         element={
          <DashboardLayout/>
        }
         >
          <Route path='' element={<DashHome/>}/>
         </Route> 
        : <Route path="/"  element={<Home/>} />}
      

      </Routes>
     
    </>
  );
}

export default App;
