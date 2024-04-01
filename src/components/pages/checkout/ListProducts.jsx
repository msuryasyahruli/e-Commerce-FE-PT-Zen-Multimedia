import React, { useContext } from 'react'
import Product from './Product'
import { CartContext } from '../cart/CartContext';

const ListProducts = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <div className='bg-gray-300 col-span-2 rounded p-4 gap-y-4 flex flex-col h-fit'>
                {cart.map((item, index) => (
                    <Product key={index} products={item} />
                ))}
            </div>
        </>
    )
}

export default ListProducts