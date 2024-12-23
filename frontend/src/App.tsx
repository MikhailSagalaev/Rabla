import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CatalogPage from './pages/Catalog';
import CategoryCatalog from './pages/Catalog/CategoryCatalog';
import ProductPage from './pages/Product/ProductPage';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Cart/CheckoutPage';
import AuthPage from './pages/Auth/AuthPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:category" element={<CategoryCatalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;