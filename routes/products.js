let express = require('express');
let router = express.Router();


const productController= require('../controllers/productsController');

router.get('/:id?',productController.index);
router.post('/',productController.store);
router.put('/:id',productController.update);
router.delete('/:id',productController.destroy);  

module.exports = router;