import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const AllProducts = (props) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    if (products === null) {
        return (
            <>
                <h1>Products loading...</h1>
                <img src="https://cdn.lowgif.com/full/bbd4dc3b1f8a454b-loading-gif-transparent-11-gif-images-download.gif" alt="loading screen" />
            </>
        );
    }

    return (
        <>
            <h1>All Products:</h1>
            {products.map((product, idx) => {
                let link = `/products/details/${product._id}`
                return (
                    <p id="product" key={product._id}>
                        <Link to={link}>{product.title}</Link>
                    </p>
                )
            })}
        </>
    )
}

export default AllProducts;