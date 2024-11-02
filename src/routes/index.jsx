import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import InventoryList from '../pages/InventoryList';
import ItemDetail from '../pages/ItemDetail';
import AddItem from '../pages/AddItem';
import { useInventory } from '../contexts/InventoryContext';

const AppRoutes = () => {
    const { inventory, searchTerm, setSearchTerm } = useInventory();

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
                path="/inventory"
                element={
                    <InventoryList
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                }
            />
            <Route path="/inventory/:id" element={<ItemDetail />} />
            <Route path="/add" element={<AddItem />} />
        </Routes>
    );
};

export default AppRoutes;