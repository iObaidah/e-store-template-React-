import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import SearchBar from './components/SearchBar/SearchBar';
import pizza from './assets/pizza.jpg';
import Test from './components/Test';
import Yelp from './utils/yelp';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');
  const [businesses, setBusinesses] = useState([]);

  // Test Yelp service on component mount
  // useEffect(() => {
  //   console.log('🧪 Testing Yelp service...');
  //   Yelp.search('pizza', 'New York', 'best_match')
  //     .then(businesses => {
  //       console.log('✅ Yelp service working! Businesses:', businesses);
  //       setBusinesses(businesses);
  //     })
  //     .catch(error => {
  //       console.error('❌ Yelp service error:', error);
  //     });
  // }, []);

  // Search function
  const searchYelp = async (term, location, sortBy) => {
    console.log('🔍 Performing search...');
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  // Fallback data
  const fallbackBusinesses = [
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
      name: 'Sushi Palace',
      address: '456 Ocean Avenue',
      city: 'Seaside',
      state: 'CA',
      zipCode: '90210',
      category: 'Japanese',
      rating: 4.8,
      reviewCount: 120
    },
    {
      imageSrc: pizza,
      name: 'Burger Barn',
      address: '789 Farm Road',
      city: 'Countryside',
      state: 'TX',
      zipCode: '75001',
      category: 'American',
      rating: 4.2,
      reviewCount: 85
    },
    {
      imageSrc: pizza,
      name: 'Taco Fiesta',
      address: '321 Spice Street',
      city: 'Desertville',
      state: 'AZ',
      zipCode: '85001',
      category: 'Mexican',
      rating: 4.6,
      reviewCount: 200
    },
    {
      imageSrc: pizza,
      name: 'Pasta Paradise',
      address: '654 Noodle Lane',
      city: 'Little Italy',
      state: 'NJ',
      zipCode: '07001',
      category: 'Italian',
      rating: 4.9,
      reviewCount: 150
    },
    {
      imageSrc: pizza,
      name: 'Dragon Wok',
      address: '987 Bamboo Road',
      city: 'Chinatown',
      state: 'NY',
      zipCode: '10001',
      category: 'Chinese',
      rating: 4.3,
      reviewCount: 95
    }
  ];

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar
        searchTerm={searchTerm}
        location={location}
        sortBy={sortBy}
        onSearchChange={setSearchTerm}
        onLocationChange={setLocation}
        onSortChange={setSortBy}
        onSearch={searchYelp}
      />
      <ProductList items={businesses.length > 0 ? businesses : fallbackBusinesses} />
      <Test />
    </div>
  );
}

export default App;