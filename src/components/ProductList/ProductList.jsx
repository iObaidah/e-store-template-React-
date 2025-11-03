import React from "react";
import Product from "../Product/Product";
import './ProductList.css';

function ProductList(props) {
    return (
        <div className="product-list">
            {props.items.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                    />
                );
            })}
        </div>
    )
}

export default ProductList;