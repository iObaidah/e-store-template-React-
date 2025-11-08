import React from "react";
import './SearchBar.css';

function SearchBar(props) {
    const {
        searchTerm,
        location,
        sortBy,
        onSearchChange,
        onLocationChange,
        onSortChange,
        onSearch
    } = props;

    const handleSearchChange = (event) => {
        onSearchChange(event.target.value);
    };

    const handleLocationChange = (event) => {
        onLocationChange(event.target.value);
    };

    const handleSortClick = (sortOption) => {
        onSortChange(sortOption);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching with:', { searchTerm, location, sortBy });
        onSearch(searchTerm, location, sortBy);
    };

    return (
        <div className="search-bar">
            <div className="search-inputs">
                <div className="search-field">
                    <label htmlFor="search-term">What do you want?</label>
                    <input
                        id="search-term"
                        type="text"
                        placeholder="Search businesses..."
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
                        value={location}
                        onChange={handleLocationChange}
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
                    checked={sortBy === 'best_match'}
                    onChange={() => handleSortClick('best_match')}
                />
                <label htmlFor="best-match">Best Match</label>
                
                <input
                    type="radio"
                    id="highest-rated"
                    name="sort-option"
                    className={`sort-option ${sortBy === 'highest_rated' ? 'active' : ''}`}
                    checked={sortBy === 'highest_rated'}
                    onChange={() => handleSortClick('highest_rated')}
                />
                <label htmlFor="highest-rated">Highest Rated</label>
                
                <input
                    type="radio"
                    id="most-reviewed"
                    name="sort-option"
                    className={`sort-option ${sortBy === 'most_reviewed' ? 'active' : ''}`}
                    checked={sortBy === 'most_reviewed'}
                    onChange={() => handleSortClick('most_reviewed')}
                />
                <label htmlFor="most-reviewed">Most Reviewed</label>
            </div>
        </div>
    );
}

export default SearchBar;