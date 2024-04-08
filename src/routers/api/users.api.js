import { Router } from "express";
import userManager from "../../data/fs/UserManager.fs.js";

const usersRouter = Router()

async function createU(req, res, next) {
    try {
        const data = req.body;
        const one = await userManager.create(data);
        return res.json({
            statusCode: 201,
            message: "CREATED: " + one.id,
        });
    } catch (error) {
        return next(error)
    }
};

async function readU(req, res, next) {
    try {
        const one = await userManager.read();
        return res.json({
            statusCode: 200,
            res: one,
        });
    } catch (error) {
        return next(error)
    }
};

async function readOneU(req, res, next) {
    try {
        const { uid } = req.params;
        const one = await userManager.readOne(uid);
        return res.json({
            statusCode: 200,
            message: "USER " + one.id + " EXISTS",
            res: one,
        });
    } catch (error) {
        return next(error)
    }
};

async function updateU(req, res, next) {
    try {
        const { uid } = req.params;
        const data = req.body;
        const one = await userManager.update(uid, data);
        return res.json({
            statusCode: 200,
            message: "UPDEATED: " + one.id,
        });
    } catch (error) {
        return next(error)
    }
};

async function destroyU(req, res, next) {
    try {
        const { uid } = req.params;
        const one = await userManager.destroy(uid);
        return res.json({
            statusCode: 200,
            res: "USER ELIMINATED",
        });
    } catch (error) {
        return next(error)
    }
};

usersRouter.post("/", createU);
usersRouter.get("/", readU);
usersRouter.get("/:uid", readOneU);
usersRouter.put("/:uid", updateU);
usersRouter.delete("/:uid", destroyU);

export default usersRouter