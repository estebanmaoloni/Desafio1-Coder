import { Router } from "express";
import productManager from "../../data/mongo/managers/ProductManager.mongo.js";

const productRouter = Router()

async function createP(req, res, next) {
    try {
        const data = req.body;
        const one = await productManager.create(data);
        return res.json({
            statusCode: 201,
            message: "CREATED: " + one.id,
        });
    } catch (error) {
        return next(error)
    }
};

async function readP(req, res, next) {
    try {
        const one = await productManager.read();
        return res.json({
            statusCode: 200,
            res: one,
        });
    } catch (error) {
        return next(error)
    }
};

async function readOneP(req, res, next) {
    try {
        const { pid } = req.params;
        const one = await productManager.readOne(pid);
        return res.json({
            statusCode: 200,
            message: "PRODUCT " + one.id + " EXISTS",
            res: one,
        });
    } catch (error) {
        return next(error)
    }
};

async function updateP(req, res, next) {
    try {
        const { pid } = req.params;
        const data = req.body;
        const one = await productManager.update(pid, data);
        return res.json({
            statusCode: 200,
            message: "UPDEATED: " + one.id,
        });
    } catch (error) {
        return next(error)
    }
};

async function destroyP(req, res, next) {
    try {
        const { pid } = req.params;
        const one = await productManager.destroy(pid);
        return res.json({
            statusCode: 200,
            res: "PRODUCT ELIMINATED",
        });
    } catch (error) {
        return next(error)
    }
};

productRouter.post("/", createP);
productRouter.get("/", readP);
productRouter.get("/:pid", readOneP);
productRouter.put("/:pid", updateP);
productRouter.delete("/:pid", destroyP);

export default productRouter