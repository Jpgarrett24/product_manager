import React from "react";
import { navigate } from "@reach/router";

const EditButton = (props) => {
    const { productID } = props;

    const edit = (id) => {
        navigate(`/products/edit/${id}`);
    };

    return (
        <button onClick={() => edit(productID)}>Edit</button>
    )

}

export default EditButton;