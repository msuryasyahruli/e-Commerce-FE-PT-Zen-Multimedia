import React from 'react'
import Header from '../../elements/Header'
import Footer from '../../elements/Footer'
import { IoArrowBack } from 'react-icons/io5'
import Payment from './Payment'
import ListProducts from './ListProducts'
import Address from './Address'
import { Link } from 'react-router-dom'

const CheckoutLayout = () => {
    return (
        <>
            <Header />
            <main className='container mx-auto my-4 px-2 min-h-svh max-sm:px-4'>
                <Link to='/' className='flex items-center gap-2 font-medium'>
                    <IoArrowBack />
                    <p>Back</p>
                </Link>
                <div className='grid grid-cols-3 gap-4 my-4 max-md:grid-cols-1 max-md:gap-x-0'>
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