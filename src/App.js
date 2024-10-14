// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import PortForm from './pages/PortForm/PortForm';
import UserDetail from './pages/userDetail/UserDetail';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route path="/form" element={<PortForm />} />

        <Route path='/userDetails' element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
