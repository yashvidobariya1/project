import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Profile from './Components/Profile/Profile';
import Slider from './Slider/Slider';
import Contactus from './Components/Contact/Contactus';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Authentication/Login/Login';
import Signup from './Authentication/Singup/Signup';
import Userprofile from './Authentication/Userprofile/Userprofile';
import Details from './Components/Details/Details';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:imdbID" element={<Details />} />
        <Route path="/userprofile" element={<Userprofile />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
