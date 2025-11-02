import React from "react";
// import './Business.css';
import pizza from '../assets/pizza.jpg';

function Business(props) {
    const business = {
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

    return (
        <div className="Business">
            <div className="img-container">
                <img src={business.imageSrc} alt={business.name} />
            </div>
            <h2>{business.name}</h2>
            <div className="Business-info">
                <div className="Business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="rating">{business.rating} stars</h3>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;