import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = ({ refreshKey }) => { // NEW: Accepts refreshKey prop
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/payments')
            .then(res => setPayments(res.data))
            .catch(err => console.error(err));
    }, [refreshKey]); // NEW: useEffect now depends on refreshKey

    return (
        <div>
            <h2>Payment History</h2>
            <ul>
                {payments.map(payment => (
                    <li key={payment.id}>User ID: {payment.userId} - Amount: ${payment.amount} - Date: {payment.paymentDate}</li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentList;