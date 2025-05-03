import React from 'react';
import Header from './Header';
import Footer from './Footer';
interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header />
            <main className="py-8">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
