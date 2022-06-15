const response = require('express');
const Product = require('../models/product')


 
const productsGet = async(req,res=response)=>{
    const {limite = 5, desde=0} = req.query;
    const query = {estado:true}

    const[total,products] = await Promise.all([
        Product.countDocuments(query),
        Product.find(query)
    ])
    res.json({
        total,
        products
    })
}

const productGetById = async(req,res=response)=>{
    
    const {id} = req.params;
    
    const product = await Product.findById(id);
    
    res.json(product)
}

const productsPost = async (req,res=response)=>{
    const {...body} = req.body;

    const productDB = await Product.findOne({nombre: body.nombre})

    if(productDB){
        return res.status(400).json({msg:`El producto ${productDB.nombre},ya existe`})
    }

    const data = {
        ...body,
        nombre: body.nombre.toUpperCase()
    }

    const product = new Product(data);

    await product.save();

    res.status(201).json(product)
}

const productsPut = async (req,res=response)=>{
    const {id} = req.params;
    const {...data} = req.body;

    if(data.nombre){
        data.nombre = data.nombre.toUpperCase();
    }
    const product = await Product.findByIdAndUpdate(id,data,{new:true});

    res.json(product)
}

const productsDelete = async(req,res=response)=>{
    const{id}= req.params;
    const productDelete = await Product.findByIdAndDelete(id)
    res.json(productDelete)
}



module.exports = {
    productsGet,
    productGetById,
    productsPost,
    productsPut,
    productsDelete
} 