import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// --- Shared Navbar Component ---
const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <div className="nav-container">
      <Link to="/" className="logo">Far<span>mart</span></Link>
      <div className="nav-right">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/cart" className="cart-count">🛒 ({cartCount})</Link>
        <Link to="/login" className="nav-auth-btn">Login</Link>
        <div className="profile-circle">LK</div>
      </div>
    </div>
  </nav>
);

// --- Home/Marketplace Page ---
const Marketplace = ({ animals, addToCart }) => (
  <>
    <div className="hero">
      <h2>Premium Livestock Marketplace</h2>
      <p>Quality breeds directly from verified local farms.</p>
    </div>
    <main className="container">
      <div className="section-header">
        <h3 className="section-title">Available Animals</h3>
      </div>
      <div className="animal-grid">
        {animals.map(animal => (
          <div key={animal.id} className="animal-card">
            <div className="card-media">
              {animal.breed.toLowerCase().includes('cow') ? '🐄' : 
               animal.breed.toLowerCase().includes('sheep') ? '🐑' : '🐐'}
            </div>
            <div className="card-body">
              <h4>{animal.name}</h4>
              <span className="breed-tag">{animal.breed}</span>
              <p className="age">Age: {animal.age} Years</p>
              <div className="card-footer">
                <span className="price">KES {animal.price.toLocaleString()}</span>
                <button className="add-btn" onClick={() => addToCart(animal)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
);

// --- Auth Components (Login/Signup) ---
const AuthPage = ({ type }) => {
  const navigate = useNavigate();
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{type === 'login' ? 'Welcome Back' : 'Join Farmart'}</h2>
        <p>{type === 'login' ? 'Login to manage your farm' : 'Create a farmer or buyer account'}</p>
        <div className="auth-form">
          {type === 'signup' && <input type="text" placeholder="Full Name" />}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button className="main-btn" onClick={() => navigate('/dashboard')}>
            {type === 'login' ? 'Login' : 'Sign Up'}
          </button>
          <p className="auth-switch">
            {type === 'login' ? "Don't have an account? " : "Already have an account? "}
            <Link to={type === 'login' ? '/signup' : '/login'}>
              {type === 'login' ? 'Sign Up' : 'Login'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Controller ---
function App() {
  const [animals, setAnimals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/animals')
      .then(res => setAnimals(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  const addToCart = (animal) => setCart([...cart, animal]);

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Marketplace animals={animals} addToCart={addToCart} />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/signup" element={<AuthPage type="signup" />} />
          <Route path="/dashboard" element={
            <div className="container">
              <h2 className="section-title">Farmer Dashboard</h2>
              <div className="dashboard-placeholder">
                <p>Welcome back, Lynn! Here you can manage your livestock listings and view sales analytics.</p>
              </div>
            </div>
          } />
          <Route path="/cart" element={
            <div className="container">
              <h2 className="section-title">Your Shopping Cart</h2>
              <div className="cart-list">
                {cart.length === 0 ? <p>Your cart is empty.</p> : 
                  cart.map((item, i) => <div key={i} className="cart-item-row">{item.name} - KES {item.price}</div>)
                }
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;