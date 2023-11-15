//real time
const express = require('express');
const {Router} = express;

const routerRealTimeProducts = new Router();

routerRealTimeProducts.get('/realTimeProducts', (req, res) => {
    res.render('realTimeProducts');
})

module.exports = routerRealTimeProducts;