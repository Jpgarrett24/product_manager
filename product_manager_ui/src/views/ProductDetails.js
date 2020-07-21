import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
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
    }, [props._id]);

    const edit = (event) => {
        navigate(`/products/edit/${event.target.value}`);
    }

    const submitDelete = (event) => {
        axios.delete(`http://localhost:8000/api/products/${event.target.value}`)
            .then(navigate('/'))
            .catch((err) => { console.log(err); });
    };

    if (product === null) {
        return (
            <>
                <h1>Product loading...</h1>
                <img src="https://cdn.lowgif.com/full/bbd4dc3b1f8a454b-loading-gif-transparent-11-gif-images-download.gif" alt="loading screen" />
            </>
        );
    };

    return (
        <>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button value={product._id} onClick={edit}>Edit</button>
            <button value={product._id} onClick={submitDelete}>Delete</button>
        </>
    );
}

export default ProductDetails;