import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [animals, setAnimals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/animals')
      .then(response => {
        setAnimals(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const addToCart = (animal) => {
    setCart([...cart, animal]);
  };

  return (
    <div className="App">
      <h1>Welcome to Farmart</h1>
      <h2>Animals for Sale</h2>
      <div className="animal-list">
        {animals.map(animal => (
          <div key={animal.id} className="animal-card">
            <h3>{animal.name}</h3>
            <p>Breed: {animal.breed}</p>
            <p>Age: {animal.age}</p>
            <p>Price: ${animal.price}</p>
            <button onClick={() => addToCart(animal)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      <div className="cart">
        {cart.map((animal, index) => (
          <div key={index}>
            <h3>{animal.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
