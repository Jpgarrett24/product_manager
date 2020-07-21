import React from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './App.css';
import ProductDetails from './views/ProductDetails';
import Homepage from './views/Homepage';

function App() {
  return (
    <>
      <Router>
        <Homepage path="/"></Homepage>
        <ProductDetails path="/products/details/:_id"></ProductDetails>
      </Router>
    </>
  );
}

export default App;
