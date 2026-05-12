import {useState,useEffect, use} from 'react';
import axios from 'axios';
const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('/customers');
            setCustomers(response.data.data || []);
        } catch (error) {
            console.error('Error fetching customers:', error);
        } finally{
            setLoading(false);
        }
    };
    const filteredCustomers = customers.filter((customer) => {
        const quary = search.toLowerCase();
        return (
            customer.full_name.toLowerCase().includes(quary) ||
            customer.phone.toLowerCase().includes(quary) || 
            customer.email.toLowerCase().includes(quary) 
        );
    });
    const openAdd = () => {
        setEditingCustomer(null);
        setShowModal(true);
    }
    const openEdit = (customer) => {
        setEditingCustomer(customer);
        setShowModal(true);
    }
    
    const handleSaveCustomer = async (payload) => {
        try {
            if(editingCustomer){    
                await axios.put(`/customers/${editingCustomer.customer_id}`, payload);
            }else{
                await axios.post('/customers', payload);
            }
            fetchCustomers();
        } catch (error) {
            console.error('Error saving customer:', error);
        }
    };
    if(loading){
        return <div>Loading customers</div>;
    }   
    return (
        <div>
            <div className='page-header'>
                <div>   
                    <h1>Customers</h1>
                    <p>Manage customer information and status.</p>
                </div>
                <button onClick={openAdd}>Add Customer</button>
            </div>
            <div className='filter-row'>
                <input type="text" placeholder="Search by name or email" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <div className='table-card'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers.map((customer) => (
                            <tr key={customer.customer_id}>
                                <td>{customer.full_name}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                                <td>{customer.address}</td>
                                <td>
                                    <button onClick={() => openEdit(customer)}>Edit</button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Customers;