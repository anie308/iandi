import {Route , Routes } from 'react-router-dom'
import Login from './components/Login';
import AboutUs from './pages/AboutUs';
import Bites from './pages/Bites';
import CourseDetail from './pages/CourseDetail';
import CourseRegister from './pages/CourseRegister';
import Courses from './pages/Courses';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Session from './pages/Session';


function App() {
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
        <Route path="/bites" element={<Bites />} />
        <Route path="*" element={<NotFound/>} />

        

      </Routes>
     
    </>
  );
}

export default App;
