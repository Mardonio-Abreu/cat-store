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

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine());

app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//app.use(productRouter);
//app.use(cartRouter);



app.get('/', (req, res) => {
    
    items.map((item) => {
        
        const title = item.title;
        const description = item.description;
        const price = item.price;
        
        res.render('index',{ title, price, description
           
        })
    });

    });



app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT} "UwU"`);
});
