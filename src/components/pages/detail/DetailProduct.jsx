import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DetailProduct = () => {
    const { id } = useParams()
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
            <section className='grid grid-cols-3 gap-4 my-4'>
                <div className='col-span-1 border-4 border-gray-300 rounded overflow-hidden'>
                    <img src={products.image} alt="product" className='w-full aspect-square object-contain' />
                </div>
                <div className='col-span-2 font-medium text-2xl'>
                    <div className='flex justify-between'>
                        <p className=''>{products.title}</p>
                        <button className='bg-gray-200 text-lg min-w-40 h-fit py-2 rounded-md'>Add to cart</button>
                    </div>
                    <p className='text-red-500 my-3'>${products.price}</p>
                    <p className='text-lg'>Description</p>
                    <hr />
                    <p className='text-base font-normal whitespace-pre-line'>{products.description}</p>
                </div>
            </section>
        </>
    )
}

export default DetailProduct