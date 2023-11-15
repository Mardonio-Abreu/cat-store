
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

let items = catalogue.getProducts();

let context = [{items: items}];

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.set('views', __dirname + '/views');

app.use('/realtimeproducts', routerRealTimeProducts);

app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', {items});
});

app.get('/', (req, res) => {
      
    res.render('index', {items});
    
});

io.on('connection', (socket) => {
    console.log('New user connection! UwU');
    socket.emit('message', 'Surprise MotherFather!');
});

server.listen(PORT, () => {
    console.log(`The server is running in port ${PORT} "UwU"`);
});
