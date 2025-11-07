import React, { useState } from "react";
import './SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <div className="search-input">
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
                <button className="search-button">
                    Search
                </button>
            </div>
        </div>
    );
}