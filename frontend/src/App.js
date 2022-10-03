import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import Order from './pages/Order';
import Terms from './pages/Terms';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Shop from './pages/Shop';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/productpage/:id" element={<ProductPage />}/>
      <Route path="/checkout" element={<CheckoutPage />}/>
      <Route path="/cart" element={<Order/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    
      
      <Route path="/terms" element={<Terms/>}/>
        
    
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App