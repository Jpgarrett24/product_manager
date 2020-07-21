import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProduct = (props) => {

    const [product, setProduct] = useState(null);
    const [title, setTitle] = useState([]);
    const [price, setPrice] = useState([]);
    const [description, setDescription] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then((res) => {
                setProduct(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props._id]);

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
            <h1>Edit Product</h1>
            <form>
                <div className="inputs">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={(event) => { setTitle(event.target.value) }} />
                </div>
                <div className="inputs">
                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price" id="price" value={price} onChange={(event) => { setPrice(event.target.value) }} />
                </div>
                <div className="inputs">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" cols="100" rows="5" value={description} onChange={(event) => { setDescription(event.target.value) }}></textarea>
                </div>
                <button>Submit Edits</button>
            </form>
        </>
    );
};

export default EditProduct;