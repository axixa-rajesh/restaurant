import { useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    
    return (
        <div>
            <div className='page-header'> 
                <div>
                <h1>Orders</h1>
                <p>Create and manage orders.</p>
                </div>
                <button onClick={handleCreateOrder}>New Order</button>
            </div>

            <div className='order-layout'>
                <div className='order-form'>
                    <h3>Order Details</h3>
                    {/* Todo : Customer selector, table selector, menu items */}
                    <p>Order form shell - Add customer, table, and menu items.</p>
                </div>
                <div className='order-summary'>
                    <h3>Order Summary</h3>
                    {/* Todo : Item list or totals */}
                    <p>Order summary shell - Show item totals here</p>
                </div>
            </div>
            <div className='order-list'>
                <h3>Recent orders</h3>
                {/* Todo : Order tables */}
                <p>Order list shell - Show orders table here</p>
            </div>
        </div>
    );
}

export default Orders;