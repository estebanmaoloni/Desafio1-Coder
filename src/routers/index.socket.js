import userManager from "../data/fs/UserManager.fs.js"
import productManager from "../data/fs/ProductManager.fs.js"

export default async (socket) => {

    console.log("Client ID: " + socket.id)
    socket.emit("users", await userManager.read())
    socket.on("newUser", async data =>{
        await userManager.create(data)
        socket.emit("users", await userManager.read())
    })

    console.log("Product ID: " + socket.id)
    socket.emit("products", await productManager.read())
    socket.on("newProduct", async data =>{
        await productManager.create(data)
        socket.emit("products", await productManager.read())
    })
}

