import logo from './logo.svg';
import './App.css';
import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';


import pizza from './assets/pizza.jpg';
import Test from './components/Test';

function App() {
  const items = [
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
  ]

  // Sample business data as specified in requirements
  const firstProduct = {
    imageSrc: pizza,
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };
  // Second sample business to demonstrate reusability
  const secondProduct = {
    imageSrc: pizza,
    name: 'Sushi Palace',
    address: '456 Ocean Avenue',
    city: 'Seaside',
    state: 'CA',
    zipCode: '90210',
    category: 'Japanese',
    rating: 4.8,
    reviewCount: 120
  };

  return (
    <div className="App">
      <h1>E-Store</h1>
      <ProductList items={items}/>
      <Test />
    </div>
  );
}

export default App;
