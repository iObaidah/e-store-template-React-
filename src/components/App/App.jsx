import React from "react";
import './App.css';

import ProductList from "../ProductList/ProductList";
import SearchBar from "../SearchBar/SearchBar";

import pizza from '../../assets/pizza.jpg';

function App() {

    const products = [
        {
            imageSrc: pizza,
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        {
            imageSrc: pizza,
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        {
            imageSrc: pizza,
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        {
            imageSrc: pizza,
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        {
            imageSrc: pizza,
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        {
            imageSrc: pizza,
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        {
            imageSrc: pizza,
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        {
            imageSrc: pizza,
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        }
    ]

    return (
        <div className="App">
            <h1>e-store</h1>
            <main className="container">
                <SearchBar />
                <ProductList products={products} />
            </main>
        </div>
    );
}

export default App;