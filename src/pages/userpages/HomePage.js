import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/Footer';
import HomeNav from '../../components/HomeNav';
import UserNavBar from '../../components/UserNavBar';
import UserHomePage from './UserHomePage';
const HomePage = () => {
  return (
    <>
      <UserNavBar/>
      <HomeNav />
      <Routes>
        <Route path='/' element={<UserHomePage/>}/>
      </Routes>
    </>
  )
}

export default HomePage;