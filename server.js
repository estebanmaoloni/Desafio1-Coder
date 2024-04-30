import "dotenv/config.js"
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import morgan from "morgan";
import {engine} from "express-handlebars"
import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import pathHandler from "./src/middlewares/pathHandler.js";
import __dirname from "./utils.js";
import socketCB from "./src/routers/index.socket.js"
import dbConnect from "./src/utils/dbConnect.utils.js";

console.log(process.env.PORT)
console.log(process.env.MONGO_URI)

const server = express();
const port = process.env.PORT || 9000;
const ready = async () => {
    console.log("Server redy on port: " + port);
    await dbConnect()
}
const nodeServer = createServer(server)
const socketServer = new Server(nodeServer)
nodeServer.listen(port, ready);
socketServer.on("connection",socketCB)

server.engine("handlebars", engine())
server.set("view engine", "handlebars")
server.set("views", __dirname + "/src/views")

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan("dev"))
server.use("/", indexRouter);
server.use(errorHandler)
server.use(pathHandler)

server.get("/", async (_req, res) => {
    try {
        return res.json({
            statusCode: 200,
            message: "STATUS READY",
        });
    } catch (error) {
        return res.json({
            statusCode: error.statusCode || 500,
            message: error.message || "STATUS ERROR",
        });
    }
});

