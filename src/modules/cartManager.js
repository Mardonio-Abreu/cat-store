//Class that manages the shopping carts

class cartManager {
    constructor(){

        const product = {
            id: '0',
            quantity: 0
        }

        this.products = [];
    }

    addProduct(id){

        this.products.map((product) => {
            if(product.id === id){
                product.quantity++
            }else{
                product.id = id;
                product.quantity = 1;
                this.products.push(product);
                return;
            }
        })

       

    }
}

module.exports = cartManager;