import React from 'react'

const Product = ({ products }) => {
    return (
        <>
            <div className='flex gap-4 max-md:flex-col'>
                <img src={products.image} alt="products" className='w-32 aspect-square rounded-sm bg-white object-contain max-md:aspect-video' />
                <div className='w-full font-medium'>
                    <p>{products.title}</p>
                    <p className='text-red-500'>${products.price}</p>
                </div>
            </div>
        </>
    )
}

export default Product