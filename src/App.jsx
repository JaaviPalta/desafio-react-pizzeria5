import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PaginaRegistro from './pages/PaginaRegistro';
import PaginaLogin from './pages/PaginaLogin';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { pizzaCart } from './pizzas';

function App() {
  const [cart, setCart] = useState(pizzaCart);

  const calcularTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.precio * pizza.count), 0);
  };

  return (
    <div>
      <Navbar total={calcularTotal()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<PaginaRegistro />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
