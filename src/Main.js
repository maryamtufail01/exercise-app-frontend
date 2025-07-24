// src/Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';      // The sign-in/signup page
import Home from './Home';    // The dashboard page

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Main;
