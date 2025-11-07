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
    };
    const handleSortClick = (sortOption) => {
        setSortBy(sortOption);
    };
    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', {
            term: searchTerm,
            location: location,
            sortBy: sortBy,
        });
        alert(`Searching for ${searchTerm} in ${location} sorted by ${sortBy}`);
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
                <button
                    className="search-button"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className="sorting-options">
                <input
                    type="radio"
                    id="best-match"
                    name="sort-option"
                    className={`sort-option ${sortBy === 'best_match' ? 'active' : ''}`}
                    onClick={() => { handleSortClick('best_match') }}
                />
                <label htmlFor="best-match"> Best Match</label>
                <input
                    type="radio"
                    id="highest-rated"
                    name="sort-option"
                    className={`sort-option ${sortBy === 'highest_rated' ? 'active' : ''}`}
                    onClick={() => { handleSortClick('highest_rated') }}
                />
                <label htmlFor="highest-rated"> Highest Rated</label>
                <input
                    type="radio"
                    id="most-reviewed"
                    name="sort-option"
                    className={`sort-option ${sortBy === 'most_reviewed' ? 'active' : ''}`}
                    onClick={() => { handleSortClick('most_reviewed') }}
                />
                <label htmlFor="most-reviewed"> Most Reviewed</label>
            </div>
        </div>
    );
}

export default SearchBar;