import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            await axios.post('http://localhost:8080/api/login', { username, password });
            setUser({ username }); // Store user data
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            setUser(null);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider> // added
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};