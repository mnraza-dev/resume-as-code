import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header />

            {/* Main Content */}
            <main className="py-8">{children}</main>

         
           <Footer/>
        </div>
    );
};

export default Layout;
