import React from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './App.css';
import CreateProduct from './views/CreateProduct';

function App() {
  return (
    <>
      <Link to="/products/create">Add Products</Link>
      <Router>
        <CreateProduct path="/products/create" />
      </Router>
    </>
  );
}

export default App;
