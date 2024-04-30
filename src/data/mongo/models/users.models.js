import { Schema, model } from "mongoose";

const collection = "users"
const schema = new Schema({
    photo: {type: String, default:"https://static.vecteezy.com/system/resources/previews/024/340/668/non_2x/character-of-faceless-user-in-black-circle-vector.jpg"},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default:"user",},

},{
    timestamps: true
})

const User = model(collection, schema) 
export default User