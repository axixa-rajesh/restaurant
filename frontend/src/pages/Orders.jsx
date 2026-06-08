import { useEffect, useState } from 'react';
import api from '../services/api.js'


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [tables, setTables] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orderType, setOrderType] = useState('dine-in');
    const [customerId, setCustomerId] = useState('');
    const [tableId, setTableId] = useState('');
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [specialNote, setSpecialNote] = useState('');

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const [ordersRes, customersRes, tablesRes, menuRes] = await Promise.all([ 
                    api.get('/orders'),
                    api.get('/customers'),
                    api.get('/tables'),
                    api.get('/menu-items')
                ]);

                setOrders(ordersRes.data.data || []);
                setCustomers(customersRes.data.data || []);
                setTables(tablesRes.data.data || []);
                setMenuItems(menuRes.data.data || []);
            } catch (error) {
                console.error('Error loading order data:', error);
            } finally {
                setLoading(false);
            }
        };
            loadData();
        }, []);

    const handleCreateOrder = () => {
        console.log('Create new Order');
        
    };
    
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
                    {loading ? (
                        <p>Loading order form data...</p>
                    ) : (
                        <>
                        <div className='form-row'>
                            <label>Order Type</label>
                            <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
                                <option value="dine-in">Dine-In</option>
                                <option value="takeaway">Takeaway</option>
                            </select>
                        </div>
                        <div className='form-row'>
                            <label>Customer</label>
                            <select value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
                                <option value="">Select a customer</option>
                                {customers.map((customer) => (
                                    <option key={customer.id} value={customer.customer_id}>
                                        {customer.full_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {orderType === 'dine-in' && (
                            <div className='form-row'>
                                <label>Table</label>
                                <select value={tableId} onChange={(e) => setTableId(e.target.value)}>
                                    <option value="">Select a table</option>
                                    {tables.map((table) => (
                                    <option key={table.table_id} value={table.table_id}>
                                    {table.table_number}
                                    </option>
                                    ))}
                                </select>  
                            </div>
                        )}

                        <div className='form-row'>
                            <label>Menu Items</label>
                            <select value={selectedMenuItem} onChange={(e) => setSelectedMenuItem(e.target.value)}>
                                <option value="">Select a menu item</option>
                                {menuItems.map((item) => (
                                    <option key={item.menu_item_id} value={item.menu_item_id}>
                                        {item.item_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='form-row'>
                            <label>Quantity</label>
                            <input type="number"value={quantity}onChange={(e) =>setQuantity(Number(e.target.value))} min="1"/>
                        </div>
                        <div className="form-row">
                            <label>Discount</label>
                            <input type="number" min="0" step="0.01" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Special Note</label>
                            <textarea value={specialNote}onChange={(e) => setSpecialNote(e.target.value)}/>
                        </div>
                        </>
                    )}
                </div>

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹0.00</span>
                    </div>
                    <div className="summary-row">
                        <span>Tax (5%)</span>
                        <span>₹0.00</span>
                    </div>
                    <div className="summary-row">
                        <span>Discount</span>
                        <span>₹{discount}</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₹0.00</span>
                    </div>
                    <button onClick={() => console.log('Submit order')} className="primary-button">
                        Submit Order
                    </button>
                </div>
            </div>
            <div className='order-list'>
                <h3>Recent orders</h3>
                {loading ? (
                    <p>Loading orders...</p>
                ) : (
                    <div className="orders-table-shell">
                        <p>Order list shell - Show orders table here</p>
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default Orders;