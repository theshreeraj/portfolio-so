// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import PortForm from './pages/PortForm/PortForm';
import UserDetail from './pages/userDetail/UserDetail';
import JobDetail from './pages/jobDetail/JobDetail';
import JobForm from './pages/jobForm/JobForm';
import Login from './pages/authentication/login/Login';
import Signup from './pages/authentication/signup/Signup';
import UserDashboard from './pages/adminPanel/UserDashboard';
import RecruiterDashboard from './pages/adminPanel/RecruiterDashboard';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>

        
        <Route path="/jobform" element={<JobForm/>} />
        <Route path="/portfolioform" element={<PortForm />} />

        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path='/jobDetails' element={<JobDetail />} />

        {/* Admin Panel */}
        <Route path="/userdashboard" element={<UserDashboard />}/>
        <Route path="/recruiterdashboard" element={<RecruiterDashboard />}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
