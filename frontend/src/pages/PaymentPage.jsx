import React, { useState } from 'react';
import PaymentList from '../components/payments/PaymentList.jsx';
import PaymentForm from '../components/payments/PaymentForm.jsx';

const PaymentPage = () => {
    const [refreshKey, setRefreshKey] = useState(0); // NEW: State to trigger refresh

    const handlePaymentAdded = () => {
        setRefreshKey(prevKey => prevKey + 1); // Increment key to trigger useEffect
    };

    return (
        <div className="page-container">
            <PaymentForm onPaymentAdded={handlePaymentAdded} />
            <PaymentList refreshKey={refreshKey} /> {/* Pass the key as a prop */}
        </div>
    );
};

export default PaymentPage;