//Class that manages the shopping carts

class cartManager {
    constructor(id, path){
        this.path = path;
        this.products = [];
        this.id = id;
    }

    writeFile(file, jsonFile){
        const jsonData = JSON.stringify(file, null, 2);
        fs.writeFileSync(jsonFile, jsonData);
    }

    createFile (file) {
        const cartItems = [];
        this.writeFile(this.path,cartItems);
    }

    getCart(){
            
        if(fs.existsSync(this.path)){
            let cartJSON = fs.readFileSync(this.path, 'utf-8');
            let cart = JSON.parse(catalogueJSON);
            return catalogue;
        }else{
            console.log("File not found!");
         }}

    addProduct(id){

        this.products.map((product) => {
            if(product.id === id){
                product.quantity++;
                return console.log("1 more product added!");
            }else{
                this.products.push({id: id, quantity: 1});
                return console.log("Product added!");
            }
        })

       

    }
}

module.exports = cartManager;