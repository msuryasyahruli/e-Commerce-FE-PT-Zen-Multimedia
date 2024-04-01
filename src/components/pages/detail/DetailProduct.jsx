import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { CartContext } from '../cart/CartContext';


const DetailProduct = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const { addToCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const handleAddToCart = (products) => {
        addToCart(products);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 1000);
    };

    return (
        <>
            {showModal && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded'>
                        <p>Item added to cart successfully!</p>
                    </div>
                </div>
            )}
            <section className='flex gap-4 my-4 max max-md:flex-col'>
                <div className='border-4 border-gray-300 rounded overflow-hidden h-fit w-1/3 max-md:w-full'>
                    <img src={products.image} alt="product" className='w-full aspect-square object-contain max-md:aspect-video' />
                </div>
                <div className='font-medium text-2xl max-md:text-xl w-2/3 max-md:w-full'>
                    <div className='flex justify-between gap-3'>
                        <p className=''>{products.title}</p>
                        <button 
                            className='bg-gray-200 text-lg min-w-40 h-fit py-2 rounded-md hover:bg-gray-300 max-md:py-1 max-md:min-w-28 max-md:text-base' 
                            onClick={() => handleAddToCart(products)}
                        >
                            Add to cart
                        </button>
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