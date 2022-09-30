import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AdminDashboard from './pages/adminPages/AdminDashboard';
import LandingPage from './pages/userpages/LandingPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/admindashboard/*' element={<AdminDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
