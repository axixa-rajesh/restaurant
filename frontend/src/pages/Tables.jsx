import { useState, useEffect } from 'react';
import axios from 'axios';

const Tables = () => {
    const [tables, setTables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingTable, setEditingTable] = useState(null);
    useEffect(() => {
        fetchTables();
    }, []);
        
        const fetchTables = async () => {
            try {
                const response = await axios.get('/tables');
                setTables(response.data.data || []);
            } catch (error) {
                console.error('Error fetching tables:', error);
            } finally{
                setLoading(false);
            }
        };

        const filteredTables = tables.filter(table => {
            const matchesSearch = table.table_Number.toLowerCase().includes(search.toLowerCase()) || table.location.toLowerCase().includes(search.toLowerCase());
            const matchesStatus = statusFilter ? table.status === statusFilter : true;
            return matchesSearch && matchesStatus;
        });

        const openAdd = () => { 
            setEditingTable(null);
            setShowModal(true);
        }
        const openEdit = (table) => {
            setEditingTable(table);
            setShowModal(true);
        }

        const handleSaveTable = async (payload) => {
            try {
                if(editingTable){
                    await axios.put(`/tables/${editingTable.table_id}`, payload);
                }else{
                    await axios.post('/tables', payload);
                }
                fetchTables(); 
            } catch (error) {
                console.error('Error saving table:', error);
            }
        };
        if(loading){
            return <div>Loading tables...</div>;
        }

    return (
        <div >
            <div className='page-header'>
                <div>
                    <h1>Tables</h1>
                    <p>Manage restaurant tables, status, and capacity.</p>
                </div>
                <button onClick={openAdd}>Add Table</button>
            </div>

            <div className='filter-row'>
                <input type="text" placeholder="Search by table or location" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="">All Statuses</option>
                    <option value="available">Available</option>
                    <option value="occupied">Occupied</option>
                    <option value="reserved">Reserved</option>
                    <option value="cleaning">Cleaning</option>
                </select>
            </div>

            <div className='table-card'>
                <table>
                    <thead>
                        <tr>
                            <th>Table Number</th>
                            <th>Location</th>
                            <th>Capacity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTables.length?
                        filteredTables.map((table) => (
                            <tr key={table.table_id}>
                                <td>{table.table_Number}</td>
                                <td>{table.capacity}</td>
                                <td>{table.status}</td>
                                <td>{table.Location}</td>
                                <td>
                                    <button onClick={() => openEdit(table)}>Edit</button>
                                </td>
                            </tr>
                        )) : (
                        <tr>
                            <td colSpan="5">No tables found.</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>

    </div>
    );
}

export default Tables;