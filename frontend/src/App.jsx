import React from 'react'
import { BrowserRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './Components/Layouts/MainLayout';
import AuthLayout from './Components/Layouts/AuthLayout'; 
import Login from './Components/pages/Login/Index';
import Dashboard from './Components/pages/Dashboard/Index';
import Billing from './Components/pages/Billing/Index';
import Customer from './Components/pages/Customer/Index';
import Inventory from './Components/pages/Inventory/Index';
import Kitchen from './Components/pages/Kitchen/Index';
import Orders from './Components/pages/Orders/Index';
import Menu from './Components/pages/Menu/Index';
import Reports from './Components/pages/Reports/Index';  
import Reservations from './Components/pages/Reservations/Index';  
import Table from './Components/pages/Table/Index';
import User from './Components/pages/User/Index';

function App() {
  

  return (
    <>
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<AuthLayout />}>   
        </Routes>
      </BrowserRouter>
    </div>
    
         </>
  )
}

export default App
