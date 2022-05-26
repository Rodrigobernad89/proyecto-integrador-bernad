const fs = require('fs');

const archivo = './cart.txt';
const leerArchivo = fs.readFileSync(archivo, { encoding: 'utf-8' });
const data = JSON.parse(leerArchivo);

class Cart {

    constructor(archivo) {
        this.archivo = archivo
    }

    


}


const c = new Cart(archivo);

module.exports = Cart;

