// src/components/CustomerLayout.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CustomerLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default CustomerLayout;
