import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            title,
            price,
            description,
        };

        axios
            .post("http://localhost:8000/api/products", newProduct)
            .then((res) => { console.log(res); })
            .catch((err) => { console.log((err)); });

        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <>
            <h2>Product Manager</h2>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" onChange={(event) => { setTitle(event.target.value) }} value={title} />
                </div>
                <div className="form">
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" id="price" onChange={(event) => { setPrice(event.target.value) }} value={price} />
                </div>
                <div className="form">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" cols="60" rows="10" onChange={(event) => { setDescription(event.target.value) }} value={description}></textarea>
                </div>
                <button>Create</button>
            </form>
        </>
    );
};

export default CreateProduct;