const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
        },
        price: {
            type: Number,
            required: [true, "{PATH} is required."],
            min: [0, "{PATH} must have a minimum value of {MIN}."],
        },
        description: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;