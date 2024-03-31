import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className='grid grid-cols-5 gap-3 my-4'>
                {products.map((item, index) => (
                    <Link key={index} to={`/detail/${item.id}`}>
                        <div className='col-span-1 bg-gray-300 p-1 font-medium text-xl rounded h-full'>
                            <img src={item.image} alt="product" className='w-full aspect-square bg-white rounded-sm object-contain' />
                            <h4 className='line-clamp-2 mb-2'>{item.title}</h4>
                            <h4 className='text-red-500'>${item.price}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Card