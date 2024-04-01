import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = ({ id }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    return (
        <>
            <div className='flex gap-4'>
                <img src={products.image} alt="products" className='w-32 aspect-square rounded-sm bg-white object-contain' />
                <div className='w-full font-medium'>
                    <p>{products.title}</p>
                    <p>${products.price}</p>
                </div>
            </div>
        </>
    )
}

export default Product