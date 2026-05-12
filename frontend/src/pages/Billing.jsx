import { useState } from 'react';

const Billing = () => {
    const [unpaidorders, setUnpaidorders] = useState([]);
    const [selectedorder, setSelectedOrder] = useState(null);

    const handlePayment = () => {
        setSelectedOrder(null);
    }

    return (
        <div>
            <div className="page-header">
                <h1>Billing</h1>
                <p>Manage payment for orders</p>
            </div>
            <div className="billing-layout">
                <div className='unpaid-order'>
                    <h3>Unpaid orders</h3>
                    {/* Todo : Unpaid orders table */}
                    <p>Unpaid orders shell</p>
                </div>
                <div className="payment-section">
                    <h3>Payment</h3>
                    {selectedorder ? (
                        <>
                        // Todo - Order summary and payment form
                        <p>Order summary and payment form shell</p>
                        <button onClick={handlePayment}> Process Payment</button>

                        </>
                    ) : (
                        <p>Select an order to pay.</p>
                    )}
                </div>  
            </div>
                <div className='payment-history'>
                    <h3>Payment history</h3>
                    {/* Todo : Payment history table */}
                    <p>Payment history shell</p>
                </div>    
        </div>
    );
}

export default Billing;