import axios from 'axios'
import React, { useEffect, useState } from 'react'

const productAPI = [
    { id: 1, name: 'blaballaba', price: 2876385 },
    { id: 2, name: 'balsduwheisf', price: 21432 }
]

const ListProducts = () => {
    const [cart, setCart] = useState([])
    // console.log(cart)
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/carts/user/2`)
            .then((res) => {
                setCart(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    const [products, setProducts] = useState(productAPI)

    const [isParentChecked, setIsParentChecked] = useState(false);
    const changeCheckboxStatus = (e, id) => {
        const myProducts = [...products];
        const { checked } = e.target;
        myProducts.map((product) => {
            if (id === "p1") {
                setIsParentChecked(checked);
                product.isChecked = checked;
            } else {
                if (product.id === id) {
                    product.isChecked = checked;
                }
                const isAllChildsChecked = myProducts.every(
                    (product) => product.isChecked === true
                );
                if (isAllChildsChecked) {
                    setIsParentChecked(checked);
                } else {
                    setIsParentChecked(false);
                }
            }
            return product;
        });

        setProducts([...myProducts]);
    };

    return (
        <>
            <div className='bg-gray-300 col-span-2 rounded p-4 gap-y-4 flex flex-col'>
                <div className='flex gap-4 font-semibold'>
                    <input type="checkbox" value="parent" checked={isParentChecked} onChange={(e) => changeCheckboxStatus(e, "p1")} />
                    <div className='flex justify-between w-full'>
                        <p>Select All</p>
                        <p>delete</p>
                    </div>
                </div>
                {products.map((item, index) => (
                    <div key={index} className='flex gap-4'>
                        <input type="checkbox" value="child" checked={products?.isChecked} onChange={(e) => changeCheckboxStatus(e, products.id)} />
                        <img src="" alt="product" className='w-32 aspect-square rounded-sm bg-white' />
                        <div className='flex justify-between w-full font-medium'>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListProducts