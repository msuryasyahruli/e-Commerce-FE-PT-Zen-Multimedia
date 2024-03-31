import React from 'react'
import Header from '../../elements/Header'
import Footer from '../../elements/Footer'
import ListProducts from './ListProducts'
import Payment from './Payment'
import { IoArrowBack } from 'react-icons/io5'

const CartLayout = () => {
    return (
        <>
            <Header />
            <main className='container mx-auto my-4 px-2'>
                <a href='/' className='flex items-center gap-2 font-medium'>
                    <IoArrowBack />
                    <p>Back</p>
                </a>
                <div className='grid grid-cols-3 gap-4 my-4'>
                    <ListProducts />
                    <Payment />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default CartLayout