import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes ,Navigate} from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AdminDashboard from './pages/adminPages/AdminDashboard';
import LandingPage from './pages/userpages/LandingPage';
import HomePage from './pages/userpages/HomePage';
function App() {
  const token = localStorage.token
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/admindashboard/*' element={token?<AdminDashboard/>:<Navigate to="/signin"/>}/>
        <Route path='/homepage/*' element={token?<HomePage/>:<Navigate to="/signin"/>}/>
      </Routes>
    </>
  );
}

export default App;
