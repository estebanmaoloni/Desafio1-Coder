import { Router } from "express";
import cartManager from "../../data/mongo/managers/CartManager.mongo.js";

const cartRouter = Router();

cartRouter.post("/", async (req, res, next) => {
    try {
        const data = req.body;
        const one = await cartManager.create(data);
        return res.json({
            statusCode: 201,
            message: "Created",
            response: one,
        });
    } catch (error) {
        return next(error);
    }
});

cartRouter.get("/", async (req, res, next) => {
    try {
        const { user_id } = req.body;
        if (user_id) {
            const all = await cartManager.read({ user_id });
            if (all.lenght > 0) {
                return res.json({
                    statusCode: 201,
                    message: "Read",
                    response: all,
                });
            }
        }
        const error = new Error("Not found");
        error.statusCode = 404;
        throw error;
    } catch (error) {
        return next(error);
    }
});

export default cartRouter;
