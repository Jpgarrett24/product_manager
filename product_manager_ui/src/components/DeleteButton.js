import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
    const { productID, deleteFunction } = props;

    const deleteProduct = (event) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
            .then((res) => {
                deleteFunction();
            })
            .catch((err) => { console.log(err); }
            );
    }

    return (
        <button onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteButton;