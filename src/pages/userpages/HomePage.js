import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/Footer';
import HomeNav from '../../components/HomeNav';
import UserNavBar from '../../components/UserNavBar';
import ProductDetails from './ProductDetails';
import UserHomePage from './UserHomePage';
const HomePage = () => {
  let token = localStorage.token
  return (
    <>
      <UserNavBar/>
      <HomeNav />
      <Routes>
        <Route path='/' element={<UserHomePage/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
      </Routes>
    </>
  )
}

export default HomePage;