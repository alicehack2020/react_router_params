import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
const ProductDetail = () => {

    const { prodId } = useParams();
    const [details, setDetails] = useState(null);

     useEffect(() => {
        fetch(`http://localhost:3004/p_data?id=${prodId}`)
            .then((res) => res.json())
            .then((res) => setDetails(res))
            .catch((err) => console.log(err))
    }, []);

    if(details===null) {
        return <h1>...Loading Data</h1>
    }
    else if(details.length===0){
        return <h1>Product does not exist</h1>
    }

    return (
        <div>
        <h1>Product Details</h1>
        {   
            details.map((item) => (
                <div key={item.id}>
                    <h2>Product Name: {item.name}</h2>
                    <h2>Product Price: {item.price}</h2>
                </div>
            ))
        }
        </div>
    )
}

export default ProductDetail