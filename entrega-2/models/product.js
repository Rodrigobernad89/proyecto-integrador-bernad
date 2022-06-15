const {Schema,model} = require('mongoose');


const ProductSchema = Schema({
    timestamp:{ 
        type:Date, 
        default: Date.now 
    },
    nombre:{
        type:String,
        required:[true,'El campo nombre es obligatorio']
    },
    descripcion:{
        type:String,
    },
    codigo:{
        type:String,
        required:[true,'El campo codigo es obligatorio'],
        unique:true
    },
    foto:{
        type:String,
        required:[true,'El campo foto es obligatorio']
    },
    precio:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    }
})


module.exports = model('Product',ProductSchema);