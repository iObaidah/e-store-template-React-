import React from "react";
import Product from "../Product/Product";
import './ProductList.css';

function ProductList(props) {
    return (
        <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default ProductList;