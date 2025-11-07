import React, { useState } from "react";
import './SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }
    const handleSortClick = (sortOption) => {
        setSortBy(sortOption);
    };

    return (
        <div className="search-bar">
            <div className="search-inputs">
                <div className="search-field">
                    <label htmlFor="search-term">What do you want?</label>
                    <input
                        id="search-term"
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="search-field">
                    <label htmlFor="location">Where?</label>
                    <input
                        id="location"
                        type="text"
                        placeholder="Location..."
                        value={location}             // Connect to location
                        onChange={handleLocationChange} // Use location handler
                    />
                </div>
                <button className="search-button">
                    Search
                </button>
            </div>
            <div className="sorting-options">
                <button
                    className={`sort-option ${sortBy === 'best_match' ? 'active' : ''}`}
                    onClick={() => handleSortClick('best_match')}
                >
                    Best Match
                </button>
            </div>
        </div>
    );
}

export default SearchBar;