import React from 'react'
import { IoCartOutline, IoNotificationsOutline, IoPersonCircleOutline, IoSearch, IoStorefrontOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='grid grid-cols-3 h-16 bg-gray-400 items-center px-6'>
                <div className='flex items-center gap-2'>
                    <IoStorefrontOutline className='w-11 h-11' />
                    <p className='font-bold text-3xl'>Shop app</p>
                </div>
                <div className='flex justify-center'>
                    <div className='w-96 h-10 bg-white flex items-center justify-end rounded-full px-3 gap-1'>
                        <IoSearch className='text-2xl' />
                        <input type="search" placeholder='Search' className='outline-none w-full' />
                    </div>
                </div>
                <div className='flex items-center justify-end gap-4'>
                    <Link><IoNotificationsOutline className='w-9 h-9 hover:bg-gray-500 rounded-full p-1' /></Link>
                    <Link to='/cart'><IoCartOutline className='w-9 h-9 hover:bg-gray-500 rounded-full p-1' /></Link>
                    <Link><IoPersonCircleOutline className='w-11 h-11 hover:bg-gray-500 rounded-full' /></Link>
                </div>
            </header>
        </>
    )
}

export default Header