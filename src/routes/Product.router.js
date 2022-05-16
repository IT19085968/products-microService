const express = require('express');
const router = express.Router();
const Productcontroller = require('../controllers/Products.controller');

module.exports = function(){
    router.post('/create', Productcontroller.createProduct);
    router.get('/', Productcontroller.getAllProducts);
    router.delete('/delete/:id',Productcontroller.deleteProducts);
    router.put('/update/:id',Productcontroller.updateProducts);
    router.get('/a/:id', Productcontroller.getOneProduct);
    return router;
}
