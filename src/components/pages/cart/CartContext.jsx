import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCart(cart.map(product => product.id === productId ? { ...product, quantity } : product));
    };

    const updatePrice = (productId, price) => {
        setCart(cart.map(product => product.id === productId ? { ...product, price } : product));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, updatePrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};