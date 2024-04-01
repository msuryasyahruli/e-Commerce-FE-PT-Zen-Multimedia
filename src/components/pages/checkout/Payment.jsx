import React from 'react'

const Payment = () => {
    return (
        <>
            <div className='bg-gray-300 rounded p-4 h-fit'>
                <p className='font-medium text-xl'>Shopping summary</p>
                <div className='my-4'>
                    <p className='my-2'>Payment</p>
                    <hr />
                    <div>
                        <input type="radio" id='Gopay' name='payment' value="Gopay" />
                        <label htmlFor="Gopay">Gopay</label>
                    </div>
                    <div>
                        <input type="radio" id='Dana' name='payment' value="Dana" />
                        <label htmlFor="Dana">Dana</label>
                    </div>
                    <div>
                        <input type="radio" id='Shopee pay' name='payment' value="Shopee pay" />
                        <label htmlFor="Shopee pay">Shopee pay</label>
                    </div>
                </div>
                <div className='flex justify-between my-2'>
                    <p>Total</p>
                    <p>-</p>
                </div>
                <hr />
                <button className='bg-gray-100 mt-4 w-full rounded-sm py-2 hover:bg-gray-200'>
                    Buy
                </button>
            </div>
        </>
    )
}

export default Payment