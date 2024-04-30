import { Schema, model } from "mongoose";

const collection = "products"
const schema = new Schema({
    photo: {type: String, default:"https://static.vecteezy.com/system/resources/previews/024/340/668/non_2x/character-of-faceless-user-in-black-circle-vector.jpg"},
    title: {type: String, required: true},
    price: {type: String, required: true},
    category: {type: String},
    stock: {type: String},   
},{
    timestamps: true
})

const Product = model(collection, schema) 
export default Product

