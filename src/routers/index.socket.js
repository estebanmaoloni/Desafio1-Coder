import userManager from "../data/fs/UserManager.fs.js"
import productManager from "../data/fs/ProductManager.fs.js"

export default async (socket) => {

    console.log("Client ID: " + socket.id)
    socket.emit("usersRegister", await userManager.read())
    socket.on("register", async data =>{
        await userManager.create(data)
        socket.emit("usersRegister", await userManager.read())
    })

    console.log("Product ID: " + socket.id)
    socket.emit("productsRegister", await productManager.read())
    socket.on("products", async data =>{
        await productManager.create(data)
        socket.emit("productsRegister", await productManager.read())
    })
}

