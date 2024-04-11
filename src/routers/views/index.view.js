import { Router } from "express";
import productRouter from "./products.view.js";
import usersRouter from "./users.view.js";

const viewsRouter = Router()
viewsRouter.use("/products",productRouter)
viewsRouter.use("/users", usersRouter)
viewsRouter.get("/",(req,res,next)=>{
    try {
        return res.render("index")
    } catch (error) {
        return next(error)
    }
})

export default viewsRouter