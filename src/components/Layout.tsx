import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header />

            {/* Main Content */}
            <main className="py-8">{children}</main>

            {/* Footer Section */}
            <footer className="bg-gray-800 py-6 mt-12">
                <div className="max-w-7xl mx-auto text-center text-gray-400">
                    <p>&copy; 2025 Resume-as-Code. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
