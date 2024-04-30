import Cart from "../models/cart.model.js";
import Manager from '../Manager.Mongo.js';

const cartManager = new Manager(Cart)
export default cartManager
