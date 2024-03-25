import React, { useState } from 'react';
import './Checkout.css';



function Checkout() {
    const [items, setItems] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 1 },
        { id: 2, name: 'Product 2', price: 20, quantity: 2 },
        { id: 3, name: 'Product 3', price: 30, quantity: 3 }
    ]);

    const calculateTotal = () => {
        let total = 0;
        items.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div className="side-checkout">
            <table className='table-checkout'>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='total'>
            <p>Total: {calculateTotal()}</p>
            <button className='checkout-button'>Finalize Checkout</button>
            </div>
        </div>
    );
}

export default Checkout;