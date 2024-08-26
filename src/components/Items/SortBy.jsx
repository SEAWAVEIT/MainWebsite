import React, { useState } from 'react';

function SortBy({ onSort }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSort(value);
    };

    return (
        <div className='sortByContainer'>
            <label htmlFor="sortBy">Sort By:</label>
            <select
                className='rounded border-gray-300 p-2 ml-2 border'
                value={selectedOption}
                onChange={handleChange}
                id="sortBy">
                <option value="">Select...</option>
                <option value="date-newest">Date: Newest First</option>
                <option value="date-oldest">Date: Oldest First</option>
            </select>
        </div>
    );
}

export default SortBy;
