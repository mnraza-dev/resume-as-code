import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { ThemeProvider } from "@/context/theme-provider"
const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes like pricing, about, etc., go here */}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
