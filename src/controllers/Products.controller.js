const Product = require('../models/products.model');

//Add new Product
const createProduct = async (req, res) => {
    if (req.body) {
        
        const product = new Product(req.body);
        await product.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).
            catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//get all Product
const getAllProducts = async (req, res) => {
    await Product.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Delete a Product
const deleteProducts = async (req, res) => {
    if (req.params && req.params.id) {
        await Product.findByIdAndRemove(req.params.id)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Update a Product
const updateProducts = async (req, res) => {
    if (req.params && req.params.id) {
        await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//find a Product
const getOneProduct = async(req,res) =>{
    if(req.params && req.params.id){
        await Product.findById(req.params.id)
        .then(data =>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error:error.message});
        });
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    deleteProducts,
    updateProducts,
    getOneProduct
}