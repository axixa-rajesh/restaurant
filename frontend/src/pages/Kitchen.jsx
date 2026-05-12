import { useEffect, useState } from 'react';
const Kitchen = () => {
    const [orders, setOrders] = useState([]);
    const [preparing, setPreparing] = useState([]);
    const [ready, setReady] = useState([]);

    useEffect(() => {
        // Fetch kitchen orders
    }, []);

    const handleStatusChange = (orderId, newStatus) => {
        // Update order status
    };

    return (
        <div>
            <div className="page-header">
                <h3>Kitchen</h3>
                <p>Manage order items in kitchen</p>
            </div>
            <div className="kitchen-columns">
                <div className="column">
                    <h4>Panding</h4>
                    <p>Panding item shell</p>
                </div>
                <div className="column">
                    <h4>Preparing</h4>
                    <p>Preparing item shell</p>
                </div>
                <div className='column'>
                    <h4>Ready</h4>
                    <p>Ready item shell</p>
                </div>
            </div>
            
        </div>
    );
}

export default Kitchen;