import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header';

function App() {
    const [username] = useState("Admin");

    return (
        <Router>
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar />
                <div className="ml-64 flex-1">
                    <Header username={username} />
                    <main className="mt-16 p-6">
                        <AppRoutes />
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;