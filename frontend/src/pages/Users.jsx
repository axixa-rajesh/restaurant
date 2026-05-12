import { useEffect, useState } from 'react';


const Users = () => {
    const [statusFilter, setStatusFilter] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/users');
            setUsers(response.data.data || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally{
            setLoading(false);
        }
    };  
    const filteredUsers = users.filter(user => {
        const matchesSearch = user.full_name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
        const matchesRole = roleFilter ? user.role === roleFilter : true;
        const matchesStatus = statusFilter ? user.status === statusFilter : true;
        return matchesSearch && matchesRole && matchesStatus;
    }
    );
     const handleSaveUser = async (payload) => {
        try {
            if(editingUser){
                await axios.put(`/users/${editingUser.user_id}`, payload);
            }else{
                await axios.post('/users', payload);
            }
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    const openAddUser = () => {
        setEditingUser(null);
        setShowModal(true);
    }
        const openEditUser = (user) => {    
        setEditingUser(user);
        setShowModal(true);
    }

    return (
        <div>
            <div className='page-header'>
                <div>
                    <h1>Users</h1>
                    <p>Manage staff user accounts, roles, and status.</p>
                </div>
                <button onClick={openAddUser}>Add User</button>
            </div>
            <div className='filter-row'>
                <input type="text" placeholder="Search by name or email" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="user">User</option>
                </select>
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
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length ? (
                        filteredUsers.map(user => (
                            <tr key={user.user_id}> 
                                <td>{user.full_name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>
                                    <button onClick={() => openEditUser(user)}>Edit</button>
                                </td>
                            </tr>
                        )) 
                    ) : (
                            <tr>
                                <td colSpan="5">No users found.</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default Users;