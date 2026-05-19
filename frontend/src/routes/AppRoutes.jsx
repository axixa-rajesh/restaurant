// AppRoutes
import { Routes, Route } from 'react-router-dom';
// Pages
import Dashboard from '../pages/dashboard';
import Users from '../pages/Users';
import MenuItems from '../pages/MenuItems';
import Billing from '../pages/Billing';
import Login from '../pages/Login';
import Tables from '../pages/Tables';
import Customers from '../pages/Customers';
import Categories from '../pages/Categories';
import Orders from '../pages/Orders';
import Kitchen from '../pages/Kitchen';
import Reports from '../pages/Reports';


const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<ProtectedRoutes element={ <Users />}/>} />
                <Route path="/menu-items" element={<ProtectedRoutes element={<MenuItems />} />} />
                <Route path="/billing" element={<ProtectedRoutes element= {<Billing />}/>} />
                <Route path="/tables" element={<ProtectedRoutes element= {<Tables />}/>} />
                <Route path="/customers" element={<ProtectedRoutes element= {<Customers />}/>} />
                <Route path="/categories" element={<ProtectedRoutes element={<Categories />} />} />
                <Route path="/orders" element={<ProtectedRoutes element={<Orders />} />} />
                <Route path="/kitchen" element={<ProtectedRoutes element={<Kitchen />} />} />
                <Route path="/reports" element={<ProtectedRoutes element={<Reports />} />} />
            </Routes>
    );
};

export default AppRoutes;
