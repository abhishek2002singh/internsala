


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes

import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';

const App = () => {
  return (
    <Router>
      <Routes>  {/* Change from Switch to Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;

