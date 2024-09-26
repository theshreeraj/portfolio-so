// App.js
import React from 'react';
import Home from './pages/home/Home';
import PortForm from './pages/PortForm/PortForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route path="/form" element={<PortForm />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
