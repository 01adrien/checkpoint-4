import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductsPage from "./pages/productsPage";
import AdminPage from "./pages/adminPage";
import OrderPage from "./pages/orderPage";
import DetailPage from "./pages/detailPage";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={<ProductsPage setCart={setCart} cart={cart} />}
          />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/order"
            element={<OrderPage setCart={setCart} cart={cart} />}
          />
          <Route
            path="/products/:id"
            element={<DetailPage setCart={setCart} cart={cart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
