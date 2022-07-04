import {Route , Routes } from 'react-router-dom'
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Session from './pages/Session';


function App() {
  return (
    <AuthProvider>
     
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Session />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/iandi-admin" element={<Login />} />
        <Route path="*" element={<NotFound/>} />

        

      </Routes>
     
    </AuthProvider>
  );
}

export default App;
