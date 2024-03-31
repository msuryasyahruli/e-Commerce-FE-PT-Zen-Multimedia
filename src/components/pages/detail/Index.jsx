import React from 'react'
import Header from '../../elements/Header'
import Footer from '../../elements/Footer'
import Card from '../../elements/Card'
import DetailProduct from './DetailProduct'
import { IoArrowBack } from 'react-icons/io5'

const DetailLayout = () => {
    return (
        <>
            <Header />
            <main className='container mx-auto my-4 px-2'>
                <a href='/' className='flex items-center gap-2 font-medium'>
                    <IoArrowBack />
                    <p>Back</p>
                </a>
                <DetailProduct />
                <p className='text-2xl font-medium mt-8'>Recommendation</p>
                <hr />
                <Card />
            </main>
            <Footer />
        </>
    )
}

export default DetailLayout