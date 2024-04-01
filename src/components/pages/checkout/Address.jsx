import axios from "axios";
import React, { useEffect, useState } from "react";

const Address = () => {
    const [address, setAddress] = useState([]);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/users/1")
            .then((res) => {
                setAddress(res.data.address);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="bg-gray-300 rounded p-4 h-fit mb-4 max-md:col-span-2">
            <p className="font-medium text-xl mb-2">Shipping Address</p>
            <hr />
            <p>
                {address.street}, {address.city}, {address.number}, {address.zipcode}
            </p>
        </div>
    );
};

export default Address;
