
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/Product_DB', {useNewUrlParser: true});
const ProductSchema = new mongoose.Schema({ /////////Products///////////
    title: {type: String, required: [true, "A title is required"], minlength:[4, "Title must be at least 4 characters long."]},
    price: {type: Number, required: [true, "A price is required"], min:[0.1,"Price must be greater than $0."]},
    imageURL: {type: String},
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Product = mongoose.model('Product', ProductSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Product;
// ^(-?\d+\.\d+)$|^(-?\d+)$