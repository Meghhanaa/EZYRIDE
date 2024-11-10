// src/components/OwnerLayout.js
import React from 'react';
import AdminNav from '../components/AdminNav';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <AdminNav/>
            {children}
        </div>
    );
};

export default AdminLayout;
