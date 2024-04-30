import { Schema, model } from "mongoose";

const collection = "carts"
const schema = new Schema({
    user_id: {type: String, default:"https://static.vecteezy.com/system/resources/previews/024/340/668/non_2x/character-of-faceless-user-in-black-circle-vector.jpg"},
    clothe_id: {type: String, required: true},
    quantity: {type: Number, required: true},
    state: {type: String, enum:["reserved", "paid","delivered"], default:"reserved"}
},{
    timestamps: true
})

const Cart = model(collection, schema) 
export default Cart

