import React, { useEffect } from "react";
import AllProducts from "../components/AllProducts";
import axios from 'axios';
import Form from "../components/ProductForm";

const Homepage = (props) => {
    const { products, setProducts, inputs, setInputs } = props;

    useEffect(() => {
        setInputs({
            title: "",
            price: "",
            description: "",
        });
    },
        []);

    const create = () => {
        const newProduct = {
            title: inputs.title,
            price: inputs.price,
            description: inputs.description,
        };

        axios
            .post("http://localhost:8000/api/products", newProduct)
            .then((res) => { console.log(res); })
            .catch((err) => { console.log((err)); });

        setInputs({
            title: "",
            price: "",
            description: "",
        });
    };

    return (
        <>
            <h2>Create a new product:</h2>
            <Form inputs={inputs} setInputs={setInputs} submitFunction={create} />
            <hr />
            <AllProducts products={products} setProducts={setProducts}></AllProducts>
        </>
    )
};

export default Homepage;