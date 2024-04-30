import User from "../models/users.models.js";
import Manager from "../Manager.Mongo.js";

const userManager = new Manager(User)
export default userManager

