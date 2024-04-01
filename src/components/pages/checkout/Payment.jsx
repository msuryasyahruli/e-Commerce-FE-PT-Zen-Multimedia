import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { CartContext } from '../cart/CartContext';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate()

    const handleClick = () => {
        clearCart()
        Swal.fire({
            title: "Payment success",
            icon: "success"
        });
        navigate('/')
    }

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
                <button onClick={handleClick} className='bg-gray-100 mt-4 w-full rounded-sm py-2 hover:bg-gray-200'>
                    Buy
                </button>
            </div>
        </>
    )
}

export default Payment