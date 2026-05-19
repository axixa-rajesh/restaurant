import {Navigate} from 'react-router-dom';
import {getToken} from '../services/AuthService';

const ProtectedRoute = ({ element }) => {
    const token = getToken();
    return token ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;