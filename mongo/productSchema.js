const {Schema} = require('mongoose')

const ProductSchema = new Schema({
    "title": String,
    "type": String,
    "description": String,
    "filename": String,
    "height": Number ,
    "width": Number,
    "price": Number,
    "rating": Number
})

module.exports = {ProductSchema};