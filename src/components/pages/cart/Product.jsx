import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

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

    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        setQuantity(quantity - 1)
    }

    const handleDecrease = () => {
        setQuantity(quantity + 1)
    }

    return (
        <>
            <div className='flex gap-4'>
                <img src={products.image} alt="products" className='w-32 aspect-square rounded-sm bg-white object-contain' />
                <div className='w-full font-medium'>
                    <p>{products.title}</p>
                    <p>${products.price * quantity}</p>
                </div>
                <div className='relative'>
                    <div className='flex items-center gap-2 h-fit text-2xl'>
                        <button onClick={handleIncrease} disabled={quantity <= 1 ? true : false} className='text-slate-400 hover:text-slate-500'><FaMinusCircle /></button>
                        <p>{quantity}</p>
                        <button onClick={handleDecrease} className='text-slate-700 hover:text-slate-600'><FaPlusCircle /></button>
                    </div>
                    <button className='text-xl absolute bottom-0 right-0 hover:text-red-500'><FaTrash /></button>
                </div>
            </div>
        </>
    )
}

export default Product