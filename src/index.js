import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import UserProfile from './components/UserProfile';
import Login from './components/navbar/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/:username" element={<UserProfile />} />
      <Route path="/Login/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );