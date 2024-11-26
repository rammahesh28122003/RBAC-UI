import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', role: 'User', status: 'Inactive' },
  ]);

  const addUser = () => {
    const name = prompt('Enter user name:');
    const role = prompt('Enter role:');
    if (name && role) {
      setUsers([...users, { id: users.length + 1, name, role, status: 'Active' }]);
    }
  };

  const editUser = (id) => {
    const name = prompt('Enter new name:');
    const role = prompt('Enter new role:');
    setUsers(users.map(user => (user.id === id ? { ...user, name, role } : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="user-management">
      <center><h2>User Management</h2></center>
      <button className="btn" onClick={addUser}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button className="btn" onClick={() => editUser(user.id)}>Edit</button>
                <button className="btn danger" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
