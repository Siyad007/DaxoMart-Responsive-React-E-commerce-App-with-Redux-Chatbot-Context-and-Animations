import React from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Service from "./pages/Service";
import LoginPage from "./pages/LoginPage";
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/CartPage";
import Chatbot from "./components/Chatbot";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <ScrollToTop />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/service" element={<Service />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/ProductDetails/:id" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
           
          </main>
          <Chatbot />
       
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
