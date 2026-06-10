import { useState,useEffect } from "react";
import axios from "axios";
import Customers from "./Customers";
const MenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [catagoryFilter, setCategoryFilter] = useState('');
    const [availabilityFilter, setAvailabilityFilter] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingMenuItem, setEditingMenuItem] = useState(null);
    useEffect(() => {
        fetchMenuItems();
    }, []);
    const fetchMenuItems = async () => {
        try {
            const response = await axios.get('/menu-items');
            setMenuItems(response.data.data || []);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        } finally{
            setLoading(false);
        }
    };
    const filteredMenuItems = menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        const matchesAvailability = availabilityFilter ? (availabilityFilter === 'available' ? item.is_available : !item.is_available) : true;
        return matchesSearch && matchesCategory && matchesAvailability;
    });
    const openAdd = () => {
        setEditingMenuItem(null);
        setShowModal(true);
    }
    const openEdit = (menuItem) => {
        setEditingMenuItem(menuItem);
        setShowModal(true);
    }
    const handleSaveMenuItem = async (payload) => {
        try {
            if(editingMenuItem){
                await axios.put(`/menu-items/${editingMenuItem.menu_item_id}`, payload);
            } else{
                await axios.post('/menu-items', payload);
            }
            fetchMenuItems();
            setshowModal(false);
        } catch (error) {
            console.error('Error saving menu item:', error);
        }
    };
    if(loading){
        return <div>Loading menu items</div>;
    }
    return (
        <div>
            <div className='page-header'>
                <div>
                    <h1>Menu Items</h1>
                    <p>Manage the restaurant's menu items, availability and pricing.</p>
                </div>
                <button onClick={openAdd}>Add Menu Item</button>
            </div>
            <div className='filter-row'>
                <input type="text" placeholder="Search by Item or category" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={catagoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="appetizer">Starters</option>
                    <option value="main_course">Main Course</option>
                    <option value="dessert">Desserts</option>
                </select>
                <select value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
            </div>
            <div className='table-card'>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Veg</th>
                            <th>Available</th>
                            <th>status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { filteredMenuItems.length ? (
                        filteredMenuItems.map(item => (
                            <tr key={item.menu_item_id}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.is_veg ? 'Yes' : 'No'}</td>
                                <td>{item.is_available ? 'Yes' : 'No'}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button onClick={() => openEdit(item)}>Edit</button>
                                </td>
                            </tr>
                        )) 
                    ) : (
                            <tr>
                                <td colSpan="7">No menu items found.</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MenuItems;