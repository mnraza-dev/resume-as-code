import React from 'react'
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* Header */}
            <Header />

            {/* Content */}
            <main className="flex-1 px-6 py-8 max-w-7xl">
                {children}
            </main>

            {/* Footer */}
            <footer className="text-center py-4 border-t text-sm text-muted-foreground">
                &copy; 2025 Resume-as-Code. Built with ❤️ and JSON.
            </footer>
        </div>
    );
};

export default Layout;
