import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Loading from "./Loading";

const AllProducts = (props) => {
    const { products, setProducts } = props;

    const clearDeleted = (productID) => {
        setProducts(products.filter((product) => product._id !== productID));
    };

    if (products === null) {
        return (
            <Loading />
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
                        <EditButton productID={product._id} />
                        <DeleteButton productID={product._id} deleteFunction={() => clearDeleted(product._id)} />
                    </div>
                )
            })}
        </>
    );
};

export default AllProducts;