import React from 'react'
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1 px-6 py-8 max-w-7xl mx-auto">
                {children}
            </main>
           <Footer />
        </div>
    );
};

export default Layout;
