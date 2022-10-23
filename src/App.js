import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes ,Navigate} from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AdminDashboard from './pages/adminPages/AdminDashboard';
import LandingPage from './pages/userpages/LandingPage';
import HomePage from './pages/userpages/HomePage';
import NotFoundPage from './pages/userpages/NotFoundPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/admindashboard/*' element={<AdminDashboard/>}/>
        <Route path='/homepage/*' element={<HomePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;