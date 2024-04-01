import React from 'react'
import Header from '../../elements/Header'
import Footer from '../../elements/Footer'
import Card from '../../elements/Card'
import DetailProduct from './DetailProduct'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const DetailLayout = () => {
    return (
        <>
            <Header />
            <main className='container mx-auto my-4 px-2 min-h-svh max-sm:px-4'>
                <Link to='/' className='flex items-center gap-2 font-medium'>
                    <IoArrowBack />
                    <p>Back</p>
                </Link>
                <DetailProduct />
                <p className='text-2xl font-medium mt-8 max-md:text-xl'>Recommendation</p>
                <hr />
                <Card />
            </main>
            <Footer />
        </>
    )
}

export default DetailLayout