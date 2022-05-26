


const{request} = require('express');
const Producto = require('../helpers/Productos');


const p = new Producto

const administrador = true;

const controller = {
    index: (req,res) =>{
        try{
            const num =parseInt(req.params.id);
            if(num){
                res.json(p.getById(num));
            }else{
                res.json(p.getAll());
            }
           
            
        }catch (error) {
            console.log(error);
        }
    },
    store: async (req = request, res) => {
        try {
            if(administrador){
                p.save(req.body);
                res.redirect('/');
            }else{
                res.send('Tienes que ser Administrador para realizar esta tarea');
            }
            
            
        } catch (error) {
            console.log(error);
        }		
	},
    update:(req,res)=>{
        if(administrador){
            res.send(p.update(req.body, req.params.id))
        }else{
            res.send('Tienes que ser Administrador para realizar esta tarea');
        }
        
	},
    destroy:(req,res)=>{
        if(administrador){
            const id = parseInt(req.params.id);
            res.send({ borrada: p.deleteById(id) })
        }else{
            res.send('Tienes que ser Administrador para realizar esta tarea')
        }
       
    }
}

module.exports = controller;