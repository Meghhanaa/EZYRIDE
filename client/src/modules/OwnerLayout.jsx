// src/components/OwnerLayout.js
import React from 'react';
import NavbarOwner from '../components/NavbarOwner';
import { Link } from 'react-router-dom';

const OwnerLayout = ({ children }) => {
    return (
        <div>
            <NavbarOwner />
            {children}
        </div>
    );
};

export default OwnerLayout;
