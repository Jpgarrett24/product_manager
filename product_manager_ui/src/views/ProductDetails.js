import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import Loading from "../components/Loading";

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

    if (product === null) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <EditButton productID={product._id} />
            <DeleteButton productID={product._id} deleteFunction={() => { navigate('/') }} />
        </>
    );
}

export default ProductDetails;