import React from "react";
import CreateProduct from "../components/CreateProduct";
import AllProducts from "../components/AllProducts";

const Homepage = (props) => {
    return (
        <>
            <CreateProduct></CreateProduct>
            <hr />
            <AllProducts></AllProducts>
        </>
    )
};

export default Homepage;