import React from 'react';

function DatePicker({ selectedDate, onDateChange }) {
    return (
        <div className="md:mb-6 md:mt-4 my-2 flex items-center space-x-4">
            <label htmlFor="sortBy" className="text-gray-700 font-medium">Filter by Date:</label>
            <input
                type="date"
                id="sortBy"
                value={selectedDate ? selectedDate.toISOString().substring(0, 10) : ''}
                onChange={(e) => onDateChange(e.target.value ? new Date(e.target.value) : null)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default DatePicker