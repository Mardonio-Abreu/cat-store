const {Router} = require('express');
const ProductManager = require('../modules/productManager');
const FILE = '../modules/data.json'

const router = Router();
const catalogue = new ProductManager();

const items = catalogue.getProducts(FILE);

router.get('/api/products', (req, res) => {

    res.send(items);
});

module.exports = router;