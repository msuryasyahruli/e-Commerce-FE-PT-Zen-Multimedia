import React, { useContext } from 'react'
import Header from '../../elements/Header'
import Footer from '../../elements/Footer'
import ListProducts from './ListProducts'
import Payment from './Payment'
import { IoArrowBack } from 'react-icons/io5'
import { CartContext } from './CartContext'; 
import { Link } from 'react-router-dom'

const CartLayout = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <Header />
            <main className='container mx-auto my-4 px-2 min-h-svh max-sm:px-4'>
                <Link to='/' className='flex items-center gap-2 font-medium'>
                    <IoArrowBack />
                    <p>Back</p>
                </Link>
                {cart.length > 0 ? (
                    <div className='grid grid-cols-3 gap-4 my-4 max-md:grid-cols-1'>
                        <ListProducts />
                        <Payment product={cart}/> 
                    </div>
                ) : (
                    <div className="text-center font-bold text-2xl mt-8">
                        Your cart is empty. Let's <a className="text-blue-500 underline" href="/">shop</a> now!
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}

export default CartLayout