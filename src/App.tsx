import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/produto/:id" element={<ProductPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/sobre" element={<AboutPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;
