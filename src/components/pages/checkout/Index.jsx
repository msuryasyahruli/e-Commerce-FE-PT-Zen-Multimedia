import React from 'react'
import Header from '../../elements/Header'
import Footer from '../../elements/Footer'
import { IoArrowBack } from 'react-icons/io5'
import Payment from './Payment'
import ListProducts from './ListProducts'
import Address from './Address'

const CheckoutLayout = () => {
    return (
        <>
            <Header />
            <main className='container mx-auto my-4 px-2 min-h-svh'>
                <a href='/cart' className='flex items-center gap-2 font-medium'>
                    <IoArrowBack />
                    <p>Back</p>
                </a>
                <div className='grid grid-cols-3 gap-4 my-4'>
                    <ListProducts />
                    <div>
                        <Address />
                        <Payment />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default CheckoutLayout