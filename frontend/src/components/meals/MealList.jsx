import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealList = ({ refreshKey }) => { // NEW: Accepts refreshKey prop
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/meals')
            .then(res => setMeals(res.data))
            .catch(err => console.error(err));
    }, [refreshKey]); // NEW: useEffect now depends on refreshKey

    return (
        <div>
            <h2>Meal Schedule</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.id}>{meal.name} - {meal.mealType} on {meal.date}</li>
                ))}
            </ul>
        </div>
    );
};
export default MealList;