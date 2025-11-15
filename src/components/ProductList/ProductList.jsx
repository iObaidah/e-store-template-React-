import React from "react";
import Product from "../Product/Product";
import './ProductList.css';

function ProductList(props) {
    return (
        <div className="product-list">
            {props.products.map((item, index) => {
                return (
                    <Product 
                        key={index}
                        product={item}
                    />
                );
            })}
        </div>
    )
}

export default ProductList;