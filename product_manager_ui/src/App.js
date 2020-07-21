import React from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './App.css';
import ProductDetails from './views/ProductDetails';
import Homepage from './views/Homepage';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Router>
        <Homepage path="/"></Homepage>
        <ProductDetails path="/products/details/:_id"></ProductDetails>
        <EditProduct path="/products/edit/:_id"></EditProduct>
      </Router>
    </>
  );
}

export default App;
