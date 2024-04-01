import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
    return (
        <>
            <div className='bg-gray-300 rounded p-4 h-fit'>
                <p className='font-medium text-xl'>Shopping summary</p>
                <div className='flex justify-between my-2'>
                    <p>Total</p>
                    <p>-</p>
                </div>
                <hr />
                <Link to='/cart/payment'>
                    <button className='bg-gray-100 mt-4 w-full rounded-sm py-2 hover:bg-gray-200'>
                        Checkout
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Payment