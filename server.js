import express from "express";
import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import pathHandler from "./src/middlewares/pathHandler.js";

const server = express();
const port = 8080;
const ready = () => console.log("Server redy on port: " + port);
server.listen(port, ready);

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

