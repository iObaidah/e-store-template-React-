import React from "react";
import './Product.css';
import pizza from '../../assets/pizza.jpg';

function Product(props) {
    const product = props.product || {
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
        <div className="product-card">
            <figure className="img-container">
                <img src={product.imageSrc} alt={product.name} />
            </figure>
            <div className="card-content">
                <h2>{product.name}</h2>
                <div className="product-category">
                    {product.category}
                </div>
                <div className="product-info">
                    <div className="product-address">
                        <p>{product.address}</p>
                        <p>{product.city}</p>
                        <p>{product.state} {product.zipCode}</p>
                    </div>
                    <div className="product-reviews">
                        <h3 className="rating">{product.rating} stars</h3>
                        <p>{product.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;