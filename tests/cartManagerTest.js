const CartManager = require('../src/modules/cartManager');
const FILE = './data.json';
const ID = 1;

const cartManager = new CartManager(ID, FILE);

cartManager.addProduct(1);
cartManager.addProduct(1);
cartManager.addProduct(2);
cartManager.getCart();