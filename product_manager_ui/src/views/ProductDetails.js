import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = (props) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    console.log(product);
    if (product === null) {
        return (
            <h1>waiting...</h1>
        )
    }
    return (
        <>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </>
    );
}

export default ProductDetails;