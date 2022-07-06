import {Route , Routes } from 'react-router-dom'
import Login from './components/Login';
import AboutUs from './pages/AboutUs';
import CourseDetail from './pages/CourseDetail';
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
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="*" element={<NotFound/>} />

        

      </Routes>
     
    </>
  );
}

export default App;
