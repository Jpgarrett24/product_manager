import React, { useState, useEffect } from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './App.css';
import ProductDetails from './views/ProductDetails';
import Homepage from './views/Homepage';
import EditProduct from './views/EditProduct';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((res) => { setProducts(res.data) })
      .catch((err) => { console.log(err); })
  })

  return (
    <>
      <Link to="/">Home</Link>
      <Router>
        <Homepage path="/" products={products} setProducts={setProducts} inputs={inputs} setInputs={setInputs}></Homepage>
        <ProductDetails path="/products/details/:_id"></ProductDetails>
        <EditProduct path="/products/edit/:_id" inputs={inputs} setInputs={setInputs} />
      </Router>
    </>
  );
}

export default App;
