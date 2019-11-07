

const Product = require("../models/model.js");
//////////IMPORTS//////////
const express = require("express");
const app = express();
//////////IMPORTS//////////
//////////STATIC FOLDERS//////////
app.use(express.json()); 
//////////STATIC FOLDERS////////// 

module.exports = {
    index: function(req, res) {
        Product.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newProduct: function(req, res) { //////add new Product
        console.log(req.body)
        Product.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    rid: function(req, res) { /////remove Product
        Product.deleteOne({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    upProduct: function(req, res) {
        console.log(req.body)
        Product.updateOne({_id:req.params.id},{$set:{title:req.body.title,price:req.body.price, imageURL:req.body.imageURL}},{runValidators:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    getProduct: function(req, res) { ///get single Product info
        Product.find({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};






