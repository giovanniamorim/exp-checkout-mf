import React, { useState } from 'react';
import './Checkout.css'; // Importe o arquivo CSS para estilização
import  Parcel from 'single-spa-react/parcel'

const Checkout = () => {
    const user = {
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    };
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };


    return (
        <div className='checkout-container'>
            <section className='checkout-section checkout-info'>
                <h1>Checkout</h1>
                <hr />
                <h2>Contact information</h2>
                <form>
                    <label>
                        Email
                        <input type='email' name='email' value={user.email} readOnly />
                    </label>
                    <label>
                        Phone
                        <input type='tel' name='phone' value={user.phone} readOnly />
                    </label>
                </form>
                <button>Save</button>
            </section>
            <section className='checkout-section checkout-payment'>
                <h2>Payment</h2>
                <p>All transactions are secure and encrypted.</p>
                <div className='payment-methods'>
                    <label>
                        <input type='radio' name='payment-method' value='credit_card' onChange={handlePaymentMethodChange} />
                        Credit card
                    </label>
                    <label>
                        <input type='radio' name='payment-method' value='paypal' onChange={handlePaymentMethodChange} />
                        PayPal
                    </label>
                    <label>
                        <input type='radio' name='payment-method' value='stripe' onChange={handlePaymentMethodChange} />
                        Stripe
                    </label>
                </div>
            </section>
            <section>
            <div>
                <Parcel config={() => System.import('@experian/exp-cart-mf')} />
            </div>
                </section>
        </div>
    );
};

export default Checkout;

