import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes like pricing, about, etc., go here */}
      </Routes>
    </Layout>
  );
};

export default App;
