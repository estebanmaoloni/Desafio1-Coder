import { connect } from "mongoose";

async function dbConnect() {
    try {
        await connect(process.env.MONGO_URI)
        console.log("DataBase Success")
    } catch (error) {
        
    }
}

export default dbConnect