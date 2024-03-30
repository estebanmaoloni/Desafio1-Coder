import express from "express";
// import productManager from "./src/data/fs/ProductManager.fs.js";
// import userManager from "./src/data/fs/UserManager.fs.js";
import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import pathHandler from "./src/middlewares/pathHandler.js";

const server = express();
const port = 8080;
const ready = () => console.log("Server redy on port: " + port);
server.listen(port, ready);

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

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

// //Products--------------------------------------------------------------------

// const createP = async (req, res) => {
//     try {
//         const data = req.body;
//         const one = await productManager.create(data);
//         return res.json({
//             statusCode: 201,
//             message: "CREATED: " + one.id,
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "ERROR",
//         });
//     }
// };

// const readP = async (req, res) => {
//     try {
//         const one = await productManager.read();
//         return res.json({
//             statusCode: 200,
//             res: one,
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "PRODCUCT NOT FOUND",
//         });
//     }
// };

// const readOneP = async (req, res) => {
//     try {
//         const { pid } = req.params;
//         const one = await productManager.readOne(pid);
//         return res.json({
//             statusCode: 200,
//             message: "PRODUCT " + one.id + " EXISTS",
//             res: one,
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "PRODCUCT NOT FOUND",
//         });
//     }
// };

// const updateP = async (req, res) => {
//     try {
//         const { pid } = req.params;
//         const data = req.body;
//         const one = await productManager.update(pid, data);
//         return res.json({
//             statusCode: 200,
//             message: "UPDEATED: " + one.id,
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "ERROR",
//         });
//     }
// };

// const destroyP = async (req, res) => {
//     try {
//         const { pid } = req.params;
//         const one = await productManager.destroy(pid);
//         return res.json({
//             statusCode: 200,
//             res: "PRODUCT ELIMINATED",
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "ERROR",
//         });
//     }
// };

// server.post("/api/products", createP);
// server.get("/api/products", readP);
// server.get("/api/products/:pid", readOneP);
// server.put("/api/products/:pid", updateP);
// server.delete("/api/products/:pid", destroyP);

// //Users---------------------------------------------------------------------------

// const createU = async (req, res) => {
//     try {
//         const data = req.body;
//         const one = await userManager.create(data);
//         return res.json({
//             statusCode: 201,
//             message: "CREATED: " + one.id,
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "ERROR",
//         });
//     }
// };

// const readU = async (req, res) => {
//     try {
//         const one = await userManager.read();
//         return res.json({
//             statusCode: 200,
//             res: one,
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "PRODCUCT NOT FOUND",
//         });
//     }
// };

// const readOneU = async (req, res) => {
//     try {
//         const { uid } = req.params;
//         const one = await userManager.readOne(uid);
//         return res.json({
//             statusCode: 200,
//             message: "USER " + one.id + " EXISTS",
//             res: one,
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "PRODCUCT NOT FOUND",
//         });
//     }
// };

// const updateU = async (req, res) => {
//     try {
//         const { uid } = req.params;
//         const data = req.body;
//         const one = await userManager.update(uid, data);
//         return res.json({
//             statusCode: 200,
//             message: "UPDEATED: " + one.id,
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "ERROR",
//         });
//     }
// };

// const destroyU = async (req, res) => {
//     try {
//         const { uid } = req.params;
//         const one = await userManager.destroy(uid);
//         return res.json({
//             statusCode: 200,
//             res: "USER ELIMINATED",
//         });
//     } catch (error) {
//         return res.json({
//             statusCode: error.statusCode || 500,
//             message: error.message || "ERROR",
//         });
//     }
// };

// server.post("/api/users", createU);
// server.get("/api/users", readU);
// server.get("/api/users/:uid", readOneU);
// server.put("/api/users/:uid", updateU);
// server.delete("/api/users/:uid", destroyU);










// // Ya no sirve-----------------------------------------------------

// server.get("/", async (req, resp) => {
//     try {
//         return resp.status(200).json({
//             resp: "API SUCCESS",
//             success: true
//         })
//     } catch (error) {
//         console.log(error)
//         return resp.status(500).json({
//             resp: "API FAILED",
//             success: false
//         })
//     }
// })

// //Products

// server.get("/api/products/:title/:price", async(req, resp)=>{
//     try {
//         const { title, price } = req.params
//         const data = {title, price}
//         const one = await productManager.create(data)
//         return resp.status(201).json({
//             resp: data,
//             success: true
//         })
//     } catch (error) {
//         console.log(error)
//         return resp.status(500).json({
//             resp: "ERROR",
//             success: false
//         })
//     }
// })

// server.get("/api/products", async(req, resp)=>{
//     try {
//         const {category} = req.query
//         const all = await productManager.read(category)
//         return resp.status(201).json({
//             resp: all,
//             category,
//             success: true
//         })
//     } catch (error) {
//         console.log(error)
//         return resp.status(500).json({
//             resp: "ERROR",
//             success: false
//         })
//     }
// })

// server.get("/api/products/:pid", async(req, resp)=>{
//     try {
//         const {pid} = req.params
//         const one = await productManager.readOne(pid)
//         if (one) {
//             return resp.status(200).json({
//                 resp: one,
//                 success: true
//             })
//         }else{
//             const error = new Error("NOT FOUND")
//             error.statusCode = 404
//             throw error
//         }
//     } catch (error) {
//         console.log(error)
//         return resp.status(error.statusCode).json({
//             resp: "ERROR",
//             success: false
//         })
//     }
// })

// //Users

// server.get("/api/users/:email", async(req, resp)=>{
//     try {
//         const { email } = req.params
//         const data = {email}
//         const one = await userManager.create(data)
//         return resp.status(201).json({
//             resp: data,
//             success: true
//         })
//     } catch (error) {
//         console.log(error)
//         return resp.status(500).json({
//             resp: "ERROR",
//             success: false
//         })
//     }
// })

// server.get("/api/users", async(req, resp)=>{
//     try {
//         const {role} = req.query
//         const all = await userManager.read(role)
//         return resp.status(201).json({
//             resp: all,
//             role,
//             success: true
//         })
//     } catch (error) {
//         console.log(error)
//         return resp.status(500).json({
//             resp: "ERROR",
//             success: false
//         })
//     }
// })

// server.get("/api/users/:uid", async(req, resp)=>{
//     try {
//         const {uid} = req.params
//         const one = await userManager.readOne(uid)
//         if (one) {
//             return resp.status(200).json({
//                 resp: one,
//                 success: true
//             })
//         }else{
//             const error = new Error("NOT FOUND")
//             error.statusCode = 404
//             throw error
//         }
//     } catch (error) {
//         console.log(error)
//         return resp.status(error.statusCode).json({
//             resp: "ERROR",
//             success: false
//         })
//     }
// })
