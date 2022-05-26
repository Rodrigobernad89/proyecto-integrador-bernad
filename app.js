const express = require('express');
require('dotenv').config();



let productsRouter = require('./routes/products');
let cartRouter = require('./routes/cart');


let app= express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static( './public'));


app.use('/api/productos',productsRouter);
app.use('/api/carrito',cartRouter);


let PORT = process.env.PORT;

app.listen(PORT, () => console.log('Iniciando en el puerto: ' + PORT))


module.exports = app;