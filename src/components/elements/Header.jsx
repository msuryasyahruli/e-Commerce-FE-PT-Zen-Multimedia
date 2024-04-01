import React, { useContext } from 'react'
import { IoBagHandleOutline, IoCartOutline, IoMenu, IoPersonCircleOutline, IoSearch, IoStorefrontOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CartContext } from '../pages/cart/CartContext';

const Header = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <header className='grid grid-cols-3 h-16 max-md:h-12 bg-gray-400 items-center px-6 sticky top-0 max-md:px-4 max-md:grid-cols-2'>
                <div className='flex items-center gap-2'>
                    <IoStorefrontOutline className='w-11 h-11 max-md:w-8 max-md:h-8' />
                    <Link to="/" className='font-bold text-3xl max-md:text-xl'>Shop app</Link>
                </div>
                <div className='flex justify-center max-md:justify-end max-md:hidden'>
                    <div className='w-96 h-10 bg-white flex items-center justify-end rounded-full px-3 max-md:h-8 max-md:px-2 gap-1'>
                        <IoSearch className='text-2xl' />
                        <input type="search" placeholder='Search' className='outline-none w-full' />
                    </div>
                </div>
                <div className='flex items-center justify-end gap-4 max-md:gap-2'>
                    <Link><IoBagHandleOutline className='w-9 h-9 hover:bg-gray-500 rounded-full p-1 max-md:hidden' /></Link>
                    <Link to='/cart'>
                        <IoCartOutline className='w-9 h-9 hover:bg-gray-500 rounded-full p-1' />
                        {cart.length > 0 && (
                            <span className='absolute top-2 mr-2 bg-red-500 text-white rounded-full w-5 h-5 text-center text-xs'>{cart.length}</span>
                        )}
                    </Link>
                    <Link><IoPersonCircleOutline className='w-11 h-11 hover:bg-gray-500 rounded-full max-md:hidden' /></Link>
                    <IoMenu className="h-8 w-8 min-md:hidden" />
                </div>
            </header>
        </>
    )
}

export default Header