import React from 'react';
import './Component/css/styles.css';
import Product from './Component/Product';
import products from './Component/data/products';

const ProductList = () => {
    return ( 
        <div className="pricing-page">
            <h2 className='tieu-de'>SHOP CONG NGHE</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;