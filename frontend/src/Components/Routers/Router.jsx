import {Routes, Route } from 'react-router-dom';
// Layouts
import MainLayout from '../Layouts/MainLayout';
import AuthLayout from '../Layouts/AuthLayout';
// Pages
import Login from '../Pages/Login/Index';
import Dashboard from '../Pages/Dashboard/Index';
import Billing from '../Pages/Billing/Index';
import Customer from '../Pages/Customers/Index';
import Inventory from '../Pages/Inventory/Index';
import Kitchen from '../Pages/Kitchen/Index';
import Orders from '../Pages/Orders/Index';
import Menu from '../Pages/Menu/Index';
import Reports from '../Pages/Reports/Index';  
import Reservations from '../Pages/Reservations/Index';  
import Table from '../Pages/Tables/Index';
import User from '../Pages/Users/Index';

function Router(props) {
    return (
        <>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/billing" element={<Billing />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/kitchen" element={<Kitchen />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/table" element={<Table />} />
                    <Route path="/user" element={<User />} />
                </Route>
            </Routes>
        </>
    );
}

export default Router;