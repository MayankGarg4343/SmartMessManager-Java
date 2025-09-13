import React, { useState } from 'react';
import axios from 'axios';

const MealForm = ({ onMealAdded }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [mealType, setMealType] = useState('Breakfast');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/meals', { name, date, mealType });
            alert('Meal added successfully!');
            setName('');
            setDate('');
            setMealType('Breakfast');
            if (onMealAdded) onMealAdded();
        } catch (err) {
            console.error('Failed to add meal:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a New Meal</h3>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Meal Type:</label>
                <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select>
            </div>
            <button type="submit">Add Meal</button>
        </form>
    );
};

export default MealForm;