import React from 'react';
import './index.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Navbar from './components/Navbar'
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuCard from './components/MenuCard';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <CartProvider>
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
