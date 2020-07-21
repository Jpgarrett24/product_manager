import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
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

    const edit = (event) => {
        navigate(`/products/edit/${event.target.value}`);
    }

    const deleteProduct = (event) => {
        axios.delete(`http://localhost:8000/api/products/${event.target.value}`)
            .then((res) => {
                console.log(res.data._id);
                setProducts(products.filter((product) => product._id !== res.data._id))
            })
            .catch((err) => { console.log(err); });
    }

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
                return (
                    <div key={product._id}>
                        <p id="product">
                            <Link to={"/products/details/" + product._id}>{product.title}</Link>
                        </p>
                        <button value={product._id} onClick={edit}>Edit</button>
                        <button value={product._id} onClick={deleteProduct}>Delete</button>
                    </div>
                )
            })}
        </>
    );
};

export default AllProducts;