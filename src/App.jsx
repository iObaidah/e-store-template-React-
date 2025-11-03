import logo from './logo.svg';
import './App.css';
import Product from './components/Product/Product';
import pizza from './assets/pizza.jpg';
import Test from './components/Test';

function App() {
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
      <Product product={firstProduct}/>
      <Product product={secondProduct}/>
      <Test />
    </div>
  );
}

export default App;
