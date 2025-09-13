import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ onPaymentAdded }) => {
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const paymentDate = new Date().toISOString().slice(0, 10);
            await axios.post('http://localhost:8080/api/payments', { userId: parseInt(userId), amount: parseFloat(amount), paymentDate });
            alert('Payment added successfully!');
            setUserId('');
            setAmount('');
            if (onPaymentAdded) onPaymentAdded();
        } catch (err) {
            console.error('Failed to add payment:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a New Payment</h3>
            <div>
                <label>User ID:</label>
                <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} required />
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <button type="submit">Add Payment</button>
        </form>
    );
};

export default PaymentForm;