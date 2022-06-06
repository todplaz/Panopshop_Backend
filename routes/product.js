const Product = require("../models/Product");
const router = require("express").Router();
const fs = require('fs');

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    const { id } = req.params;
    fs.readFile("products.json", "UTF-8", (err, products) => {
        if(err) throw err;
        const productsList = JSON.parse(products);
        const product = productsList.find(obj => obj.id === Number.parseInt(id, 10));
        res.json(product);
    })
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    fs.readFile("products.json", "UTF-8", (err, products) => {
        if(err) throw err;
        res.json(JSON.parse(products));
    })
});

module.exports = router;
