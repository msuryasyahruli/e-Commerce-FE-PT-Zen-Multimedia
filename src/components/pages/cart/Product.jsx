import React, { useContext } from 'react'
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { CartContext } from './CartContext';

const Product = ({ products }) => {
    const { removeFromCart, updateQuantity } = useContext(CartContext);

    const handleIncrease = () => {
        updateQuantity(products.id, products.quantity + 1)
    }

    const handleDecrease = () => {
        updateQuantity(products.id, products.quantity - 1)
    }

    const handleRemove = () => {
        removeFromCart(products.id)
    }

    return (
        <>
            <div className='flex gap-4 max-md:flex-col'>
                <img src={products.image} alt="products" className='w-32 aspect-square rounded-sm bg-white object-contain' />
                <div className='w-full font-medium'>
                    <p>{products.title}</p>
                    <p className='text-red-500'>${products.price * products.quantity}</p>
                </div>
                <div className='relative'>
                    <div className='flex items-center gap-2 h-fit text-2xl'>
                        <button onClick={handleDecrease} disabled={products.quantity <= 1 ? true : false} className='text-slate-400 hover:text-slate-500'><FaMinusCircle /></button>
                        <p>{products.quantity}</p>
                        <button onClick={handleIncrease} className='text-slate-700 hover:text-slate-600'><FaPlusCircle /></button>
                    </div>
                    <button className='text-xl absolute bottom-0 right-0 hover:text-red-500' onClick={() => handleRemove()}><FaTrash /></button>
                </div>
            </div>
        </>
    )
}

export default Product