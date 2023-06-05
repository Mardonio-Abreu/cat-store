const {Router} = require('express');
const ProductManager = require('../modules/productManager');
const FILE = './data.json'

const router = Router();
const catalogue = new ProductManager(FILE);

router.get('/api/products', (req, res) => {

    const items = catalogue.getProducts();

    res.send({
        statusCode: 200,
        payload: items
    });

});

    router.get('/api/products/:pid', (req, res) => {

        const id = req.params.pid;
        const items = catalogue.getProductsById(id);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    router.delete('/api/products', (req, res) => {

        const id = req.params.pid;
        const items = catalogue.deleteProduct(id);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    router.put('/api/products/:pid', (req, res) => {

        const id = req.params.pid;
        const items = catalogue.updateProduct(id, fieldValue);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    router.post('/api/products/', (req, res) => {

        const id = req.params.pid;
        const items = catalogue.addProduct(values);

        res.send({
            statusCode: 200,
            payload: itemss
        });

    });

    


module.exports = router;
