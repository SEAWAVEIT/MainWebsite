import React from 'react';

function SortBy({ sortOption, onSortChange }) {
    return (
        <div className="md:mb-6 md:mt-4 my-2 flex items-center bg-white text-black space-x-4">
            <label htmlFor="sortBy" className="text-gray-700 font-medium">Sort by:</label>
            <select
                id="sortBy"
                value={sortOption}
                onChange={(e) => onSortChange(e.target.value)}
                className="select bg-white text-black select-bordered select-sm w-32 max-w-xs">
                <option value="latest" >Latest</option>
                <option value="oldest" >Oldest</option>
            </select>
        </div>
    );
}

export default SortBy;
