const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const app = express();



class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.productosPath = '/api/productos';

        this.conectarDB();

        this.middlewares();

        this.routes();
    }


    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.productosPath,require('../routes/products'))
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor escuchando en el puerto ',this.port);
        })
    }
}

module.exports = Server;