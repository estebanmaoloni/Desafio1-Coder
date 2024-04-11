import { Router } from "express";
import userManager from "../../data/fs/UserManager.fs.js";

const usersRouter = Router()

usersRouter.get("/", async(req, res, next)=>{
    try {
        const users = await userManager.read()
        return res.render("users",{users})
    } catch (error) {
        return next(error)
    }
})

usersRouter.get("/:uid", async(req, res, next)=>{
    try {
        const {uid} = req.params
        const usersDetail = await userManager.readOne(uid)
        return res.render("usersDetails",{user: usersDetail})
    } catch (error) {
        return next(error)
    }
})


export default usersRouter