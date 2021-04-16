const express = require("express");
const router = express.Router();

// Get all products
router.get("/", (req, res) => {
    res.send("GET ALL Products");
});

// Get one
router.get("/:id", (req, res) => {
    res.send("GET " + req.params.id);
});

// Craete One
router.post("/", (req, res) => {});

// Update One
router.patch("/", (req, res) => {});

// Delete One
router.delete("/:id", (req, res) => {});

module.exports = router;
