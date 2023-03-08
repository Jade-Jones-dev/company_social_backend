import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login'
import Home from '../Home/Home'
import Signup from "../Signup/Signup";

const Routing = () => {
  return (

    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  
    
  )
}

export default Routing