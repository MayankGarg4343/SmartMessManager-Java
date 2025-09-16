import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/user/UserList.jsx';
import RegisterUserPage from './pages/RegisterUserPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Navbar from './components/common/Navbar.jsx';
import MealPage from './pages/MealPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import { AuthProvider } from './AuthContext.js'; // Correct path and filename
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <h1 style={{ textAlign: 'center' }}>Mess Management System</h1>
                    <Routes>
                        <Route path="/" element={<div className="page-container"><LoginPage /></div>} />
                        <Route path="/register" element={<div className="page-container"><RegisterUserPage /></div>} />
                        <Route path="/login" element={<div className="page-container"><LoginPage /></div>} />
                        <Route path="/users" element={<div className="page-container"><UserList /></div>} />
                        <Route path="/meals" element={<MealPage />} />
                        <Route path="/payments" element={<PaymentPage />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;