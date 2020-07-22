import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = (props) => {
    const { inputs, setInputs, submitFunction } = props;
    return (
        <>
            <form onSubmit={(event) => { event.preventDefault(); submitFunction() }}>
                <div className="form">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={inputs.title} onChange={(event) => { setInputs({ ...inputs, title: event.target.value }) }} />
                </div>
                <div className="form">
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" id="price" value={inputs.price} onChange={(event) => { setInputs({ ...inputs, price: event.target.value }) }} />
                </div>
                <div className="form">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" cols="60" rows="10" value={inputs.description} onChange={(event) => { setInputs({ ...inputs, description: event.target.value }) }}></textarea>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
};

export default Form;