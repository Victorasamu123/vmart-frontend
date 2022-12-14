import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom';
import DisplayIcon from '../../components/DisplayIcon';
import Footer from '../../components/Footer';
import HomeNav from '../../components/HomeNav';
import UserNavBar from '../../components/UserNavBar';
import Account from './Account';
import CartPage from './CartPage';
import ComputerCatPage from './ComputerCatPage';
import ElectCatPage from './ElectCatPage';
import GameCatPage from './GameCatPage';
import Payments from './Payments';
import PhoneCatPage from './PhoneCatPage';
import ProductDetails from './ProductDetails';
import TransactionPage from './TransactionPage';
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
        <Route path="/phonecategory" element={token?<PhoneCatPage/>:<Navigate to="/signin"/>}/>
        <Route path="/computercategory" element={token?<ComputerCatPage/>:<Navigate to="/signin"/>}/>
        <Route path="/electronicscategory" element={token?<ElectCatPage/>:<Navigate to="/signin"/>}/>
        <Route path="/gamecategory" element={token?<GameCatPage/>:<Navigate to="/signin"/>}/>
        <Route path="/cart" element={token?<CartPage/>:<Navigate to="/signin"/>}/>
        <Route path="/payment" element={token?<Payments/>:<Navigate to="/signin"/>}/>
        <Route path='/transactionpage' element={token?<TransactionPage/>:<Navigate to="/signin"/>}/>
        <Route path="/account" element={token?<Account/>:<Navigate to="/signin"/>}/>
      </Routes>
      {/* <DisplayIcon/> */}
      <Footer/>
    </>
  )
}

export default HomePage;