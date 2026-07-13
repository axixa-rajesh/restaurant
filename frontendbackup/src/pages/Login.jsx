import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import {login,setToken} from '../services/AuthService';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            setToken(data.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed.');
        }
    };

    return (
        <div>
            <div className="login-card">

                <h2>Login</h2>
                 {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" value={email} placeholder='Enter E-mail' onChange={(e) => setEmail(e.target.value)} required />

                    <label>Password:</label>
                    <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" variant="primary">Login</button>
            </form>
            </div>
        </div>
    );
}

export default Login;