import React from "react";
import './App.css';

import ProductList from "../ProductList/ProductList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
    return (
        <div className="App">
            <h1>e-store</h1>
            <main className="container">
                <SearchBar />
                <ProductList />
            </main>
        </div>
    );
}

export default App;