const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/product-model');

router.get('/', (req, res) => {
    let error = req.flash("error");
    res.render('index', { error });
});

router.get('/shop', isLoggedIn, async (req, res) => {
    try {
        let products = await productModel.find(); 
        res.render('shop', { products }); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.get('/logout', isLoggedIn, (req, res) => {
    res.render('shop');
});

module.exports = router;