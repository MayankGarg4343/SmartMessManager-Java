import React, { useState } from 'react';
import MealList from '../components/meals/MealList.jsx';
import MealForm from '../components/meals/MealForm.jsx';

const MealPage = () => {
    const [refreshKey, setRefreshKey] = useState(0); // NEW: State to trigger refresh

    const handleMealAdded = () => {
        setRefreshKey(prevKey => prevKey + 1); // Increment key to trigger useEffect
    };

    return (
        <div className="page-container">
            <MealForm onMealAdded={handleMealAdded} />
            <MealList refreshKey={refreshKey} /> {/* Pass the key as a prop */}
        </div>
    );
};

export default MealPage;