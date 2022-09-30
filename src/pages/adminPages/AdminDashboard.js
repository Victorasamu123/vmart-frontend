import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';
import ComputingAdmin from './ComputingAdmin';
import ElectronicsAdmin from './ElectronicsAdmin';
import GamesAdmin from './GamesAdmin';
import PhonesAdmin from './PhonesAdmin';

const AdminDashboard = () => {
  return (
    <>
      <AdminNav/>
      <Routes>
        <Route path='/addphones' element={<PhonesAdmin/>}/>
        <Route path='/addelectronics' element={<ElectronicsAdmin/>}/>
        <Route path='/addcomputing' element={<ComputingAdmin/>}/>
        <Route path='/addgames' element={<GamesAdmin/>}/>
      </Routes>
    </>
  )
}

export default AdminDashboard;