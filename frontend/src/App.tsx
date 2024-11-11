import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CatalogPage from './pages/Catalog';
import CategoryCatalog from './pages/Catalog/CategoryCatalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:category" element={<CategoryCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;