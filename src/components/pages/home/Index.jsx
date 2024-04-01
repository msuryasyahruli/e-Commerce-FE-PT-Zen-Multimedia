import React from 'react'
import Header from '../../elements/Header'
import Card from '../../elements/Card'
import Footer from '../../elements/Footer'

const HomeLayout = () => {
    return (
        <>
            <Header />
            <main className='container mx-auto px-2 min-h-svh'>
                <Card />
            </main>
            <Footer />
        </>
    )
}

export default HomeLayout