import React from "react";

const Cart = ({ cartItems }) => {
    // Tính tổng số tiền của giỏ hàng bằng cách lặp qua từng sản phẩm và tính tổng giá trị (giá * số lượng)
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            {/* Tiêu đề của phần giỏ hàng */}
            <h2>Your Cart</h2>

            {/* Hiển thị thông báo khi giỏ hàng trống */ }
            {cartItems.length === 0 ? (
                <p>Your cart is empty. </p>
            ) : (
                // Hiển thị bảng giỏ hàng khi có sản phẩm trong giỏ 
                <div>
                    <table className="cart-table">
                        {/* Phần đầu bảng với các cột */}
                        <thead>
                            <tr>
                              <th>Product</th>  
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                        </thead>
                        {/* Dữ liệu chi tiết từng sản phẩm trong giỏ hàng */}
                        <tbody>
                            {cartItems.map((item, index) => (
                                // Mỗi sản phẩm trong giỏ hàng sẽ tạo ra một dòng trong bảng 
                                <tr key={index}>
                                    {/* Cột chứa tên sản phẩm */}
                                    <td>{item.name}</td>

                                    {/* Cột chứa giá sản phẩm, định dạng với hai số sau dấu thập phân */}
                                    <td>${item.price.toFixed(2)}</td>

                                    {/* Cột chứa số lượng sản phẩm */}
                                    <td>{item.quantity}</td>

                                    {/* Cột chứa tổng giá trị của sản phẩm (giá * số lượng) */}
                                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Hiển thị tổng giá trị của giỏ hàng */}
                    <p className="cart-total">Total: ${totalAmount.toFixed(2)}</p>
                    </div>
            )}
        </div>
    );
};

export default Cart;