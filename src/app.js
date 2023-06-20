const express = require('express');
const app = new express();

const PORT = 8080;
const FILE = './data.json'

const Catalogue = require('../src/modules/productManager');
const catalogue = new Catalogue(FILE);

const handlebars = require('express-handlebars');

const http = require('http');
const server = http.createServer(app);

const routerRealTimeProducts = require('./routes/realTimeProductsRoute');

const {Server} = require('socket.io');
const io = new Server(server);




/* const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes'); */


const items = catalogue.getProducts();

let products = [];

items.map((item) => {
    products.push(item.title);
});

let context = [{items: products}];

/* app.use(express.json());
app.use(express.urlencoded({extended: true})); */

app.engine('handlebars', handlebars.engine());

app.use(express.static(__dirname + '/' + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', {products});
});

//app.use(productRouter);
//app.use(cartRouter);



app.get('/', (req, res) => {
      
    res.render('index', {products});
    
});

io.on('connection', (socket) => {
    console.log('New user connection! UwU');
});



server.listen(PORT, () => {
    console.log(`The server is running in port ${PORT} "UwU"`);
});
