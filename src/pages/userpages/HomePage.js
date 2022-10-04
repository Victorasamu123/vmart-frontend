import React from 'react'
import Footer from '../../components/Footer';
import HomeNav from '../../components/HomeNav';
import UserNavBar from '../../components/UserNavBar';

const HomePage = () => {
  return (
    <>
      <UserNavBar/>
      <HomeNav/>
      <Footer/>
    </>
  )
}

export default HomePage;