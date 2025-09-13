import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Note: Spring Security's basic auth needs the username and password in the header
            const response = await axios.get('http://localhost:8080/api/users', {
                auth: {
                    username: username,
                    password: password
                }
            });
            console.log("Login successful:", response.data);
            navigate('/users'); // Redirect to a protected page after login
        } catch (err) {
            console.error('Login failed:', err);
            setError('Invalid username or password.');
        }
    };

    return (
        <div>
            <h2>User Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default LoginForm;