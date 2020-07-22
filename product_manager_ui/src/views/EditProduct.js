import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import Loading from "../components/Loading";
import Form from "../components/ProductForm";

const EditProduct = (props) => {
    const { inputs, setInputs } = props;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then((res) => {
                setProduct(res.data);
                setInputs({
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props._id]);

    const updateProduct = () => {
        const newProduct = {
            title: inputs.title,
            price: inputs.price,
            description: inputs.description,
        };
        axios.put('http://localhost:8000/api/products/' + props._id, newProduct)
            .then(() => navigate('/products/details/' + props._id))
            .catch((err) => console.log(err))
    }

    if (product === null) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <h1>Edit Product</h1>
            <Form inputs={inputs} setInputs={setInputs} submitFunction={updateProduct} />
        </>
    );
};

export default EditProduct;