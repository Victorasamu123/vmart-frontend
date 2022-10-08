import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom';
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
        
        <Route path='/' element={token?<UserHomePage/>:<Navigate to="/signin"/>}/>
        <Route path='/:id' element={token?<ProductDetails/>:<Navigate to="/signin"/>}/>
      </Routes>
    </>
  )
}

export default HomePage;