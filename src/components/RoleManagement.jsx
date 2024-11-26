import React, { useState } from 'react';
import './RoleManagement.css';

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] },
  ]);

  const addRole = () => {
    const name = prompt('Enter role name:');
    const permissions = prompt('Enter permissions (comma-separated):').split(',');
    setRoles([...roles, { id: roles.length + 1, name, permissions }]);
  };

  const editRole = (id) => {
    const name = prompt('Enter new role name:');
    const permissions = prompt('Enter new permissions (comma-separated):').split(',');
    setRoles(roles.map(role => (role.id === id ? { ...role, name, permissions } : role)));
  };

  const deleteRole = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <div className="role-management">
      <center><h2>Role Management</h2></center>
      <button className="btn" onClick={addRole}>Add Role</button>
      <ul>
        {roles.map(role => (
          <li key={role.id}>
            <strong>{role.name}</strong>: {role.permissions.join(', ')}
            <button className="btn" onClick={() => editRole(role.id)}>Edit</button>
            <button className="btn danger" onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
