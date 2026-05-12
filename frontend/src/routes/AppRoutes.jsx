// AppRoutes
import {Routes, Route} from 'react-router-dom';
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
            <Route path="/users" element={<Users />} />
            <Route path="/menu-items" element={<MenuItems />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/reports" element={<Reports />} />
        </Routes>
    );
};

export default AppRoutes;
