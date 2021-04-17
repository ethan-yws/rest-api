const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Get All products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get One
router.get("/:id", getProduct, (req, res) => {
    res.send(res.product);
});

// Craete One
router.post("/", async (req, res) => {
    const product = new Product({
        title: req.body.title,
        model: req.body.model,
        price: req.body.price,
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update One
router.patch("/", getProduct, async (req, res) => {
    if (req.body.title != null) {
        res.product.title = req.body.title;
    }
    if (req.body.model != null) {
        res.product.model = req.body.model;
    }
    if (req.body.price != null) {
        res.product.price = req.body.price;
    }

    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete One
router.delete("/:id", getProduct, async (req, res) => {
    try {
        await res.product.remove();
        res.json({ message: "Deleted!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getProduct(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: "Cannot find Product" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.product = product;
    next();
}

module.exports = router;
