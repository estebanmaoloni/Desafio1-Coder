import Product from "../models/products.models.js";
import Manager from '../Manager.Mongo.js';

const productManager = new Manager(Product)
export default productManager