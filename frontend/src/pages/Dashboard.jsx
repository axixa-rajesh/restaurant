import React from 'react';

const Dashboard = () => {
    return (
        <>
        <div>
            <h1>Dashboard</h1>
                {/* Summary Cards */}
            <div>
                <div>
                    <h3>Today Order</h3>
                    <p>Order Summary</p>
                </div>
                <div>
                    <h3>Dine-In Order</h3>
                    <p>Order Summary</p>
                </div>
                <div>
                    <h3>Takeaway Order</h3>
                    <p>Order Summary</p>
                </div>
                <div>
                    <h3>Today Revenue</h3>
                    <p>Revenue Summary</p>
                </div>
            </div>
            <div>
                <h2>Recent Orders</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Order Number</th>
                                <th>Customer</th>
                                <th>Type</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>John Doe</td>
                                <td>Dine-In</td>
                                <td>$50.00</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;