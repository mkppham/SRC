import React from 'react';
import Product from './Product';
import products from './data/products';

const ProductList = () => {
    return ( 
        <div className="pricing-page">
            <h2 className="tieu-de">Our Products</h2>   
            <div className="product-list">
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;