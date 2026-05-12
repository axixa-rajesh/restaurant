import {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" value={email} placeholder='Enter E-mail' onChange={(e) => setEmail(e.target.value)} required />

                    <label>Password:</label>
                    <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Login;