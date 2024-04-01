import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'

const ListProducts = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/carts/user/1`)
            .then((res) => {
                setCarts(res.data[0].products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className='bg-gray-300 col-span-2 rounded p-4 gap-y-4 flex flex-col'>
                {carts.map((item, index) => (
                    <Product key={index} id={item.productId} />
                ))}
            </div>
        </>
    )
}

export default ListProducts