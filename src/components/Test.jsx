import React from "react";
import './Test.css';
import pizza from '../assets/pizza.jpg';

function Test() {

    return (
        <div className="card">
            <img src={pizza} alt="Denim Jeans" />
            <h1>Tailored Jeans</h1>
            <p className="price">$19.99</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button>Add to Cart</button></p>
        </div>
    )
}

export default Test;