import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = { username, password }; // Now includes password
            await axios.post('http://localhost:8080/api/users/register', newUser);
            alert('User registered successfully!');
            navigate('/login'); // Redirect to the login page after successful registration
        } catch (err) {
            console.error('Registration failed:', err);
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Register New User</h3>
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
            <button type="submit">Register</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default UserForm;