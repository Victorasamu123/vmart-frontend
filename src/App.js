import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
