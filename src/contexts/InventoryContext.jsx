// src/contexts/InventoryContext.jsx
import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

const initialInventory = [
    { id: 1, name: 'Laptop ASUS', category: 'Electronics', stock: 15, price: 12000000 },
    { id: 2, name: 'Printer HP', category: 'Electronics', stock: 8, price: 2500000 },
    { id: 3, name: 'Office Chair', category: 'Furniture', stock: 20, price: 1500000 },
];

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState(initialInventory);
    const [searchTerm, setSearchTerm] = useState('');

    const addItem = (newItem) => {
        setInventory([...inventory, { ...newItem, id: Date.now() }]);
    };

    return (
        <InventoryContext.Provider value={{
            inventory,
            searchTerm,
            setSearchTerm,
            addItem
        }}>
            {children}
        </InventoryContext.Provider>
    );
};

export const useInventory = () => {
    const context = useContext(InventoryContext);
    if (!context) {
        throw new Error('useInventory must be used within an InventoryProvider');
    }
    return context;
};