const express = require('express');
const app = new express();

const PORT = 8080;
const FILE = './data.json'

const Catalogue = require('../src/modules/productManager');
const catalogue = new Catalogue(FILE);

const handlebars = require('express-handlebars');

const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');


const items = catalogue.getProducts();

let products = [];

items.map((item) => {
    products.push(item.title);
});

let context = [{items: products}];

/* app.use(express.json());
app.use(express.urlencoded({extended: true})); */

app.engine('handlebars', handlebars.engine());

app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//app.use(productRouter);
//app.use(cartRouter);



app.get('/', (req, res) => {
      
    res.render('index', {products});
    
});



app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT} "UwU"`);
});
