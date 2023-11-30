import React, { useState } from 'react';
import './Component/css/styles.css';
import Product from './Component/Product';
import products from './Component/data/products';
import Cart from './Cart';

const ProductList = () => {
    // State để lưu trữ giỏ hàng 
    const [cartItems, setCartItems] = useState([]);

    // Hàm thêm sản phẩm vào giỏ hàng 
    const addToCart = (product) => {
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const existingProduct = cartItems.find((item) => item.name === product.name);

        // Nếu sản phẩm đã có trong giỏ hàng rồi, tăng số lượng lên 1
        if (existingProduct) {
            const updateCart = cartItems.map((item) => 
            item.name === product.name ? {...item, quantity: item.quantity + 1 } : item 
            );
            setCartItems(updateCart);
        } else {
            // Nếu sản phẩm có trong giỏ hàng, thêm mới vào với số lượng là 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    return ( 
        <div className="pricing-page">
            <h2 className='tieu-de'>SHOP CONG NGHE</h2>
            {/* Giao diện danh sách sản phẩm */}
            <div className="product-list">
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>

            {/* Giao diện giỏ hàng */}
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default ProductList;