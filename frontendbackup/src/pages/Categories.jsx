import { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/categories');
            setCategories(response.data.data || []);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally{
            setLoading(false);
        }
    };

    const filteredCategories = categories.filter((item) => {
        const matchesSearch = item.category_name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter ? item.status === statusFilter : true;
        return matchesSearch && matchesStatus;
    });

    const openAdd = () => {
        setEditingCategory(null);
        setShowModal(true);
    }
    const openEdit = (category) => {
        setEditingCategory(category);
        setShowModal(true);
    }

    const handleSaveCategory = async (payload) => {
        try {
            if(editingCategory){
                await axios.put(`/categories/${editingCategory.category_id}`, payload);
            }else{
                await axios.post('/categories', payload);
            }
            fetchCategories();
        } catch (error) {
            console.error('Error saving category:', error);
        }
    };
    if(loading){
        return <div>Loading categories...</div>;
    }
    return (
        <div>
            <div className='page-header'>
                <div>
                    <h1>Categories</h1>
                    <p>Manage menu categories and their status.</p>
                </div>
                <button onClick={openAdd}>Add Category</button>
            </div>
            <div className='filter-row'>
                <input type="text" placeholder="Search by categories" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>

            <div className='table-card'>
                <table>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { filteredCategories.length === 0 ? (
                        filteredCategories.map((category) => (
                            <tr key={category.category_id}>
                                <td>{category.category_name}</td>
                                <td>{category.status}</td>
                                <td>{category.description}</td>
                                <td>
                                    <button onClick={() => openEdit(category)}>Edit</button>
                                </td>
                            </tr>
                        ))):(
                            <tr>
                                <td colSpan="4">No categories found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {showModal && (
            <CategoryModal
            onClose={() => setShowModal(false)}
            onSave={handleSaveCategory}
            initialData={editingCategory}
            />
      )}
        </div>
    );
}

export default Categories;