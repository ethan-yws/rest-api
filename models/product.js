const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: false,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);
