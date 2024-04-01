import React from 'react'
import Router from "./config/router";
import { CartProvider } from './components/pages/cart/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Router/>
      </CartProvider>
    </>
  );
}

export default App;