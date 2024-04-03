import fs from "fs";
import crypto from "crypto";

class ProductManagerFs {
    constructor() {
        this.path = "./data/fs/files/products.json";
        this.init();
    }

    init() {
        const exist = fs.existsSync(this.path);
        if (!exist) {
            const productData = JSON.stringify([], null, 2);
            fs.writeFileSync(this.path, productData);
            console.log("¡The file was created!");
        } else {
            console.log("The file has already been created and contains data");
        }
    }

    async create(data) {
        try {
            if (!data.title || !data.price) {
                const error = new Error(
                    "The title and price fields are required."
                );
                throw error;
            } else {
                const product = {
                    id: crypto.randomBytes(12).toString("hex"),
                    title: data.title,
                    photo:
                        data.photo ||
                        "https://us.123rf.com/450wm/belopoppa/belopoppa1809/belopoppa180900002/109693900-imagen-de-marcador-de-posici%C3%B3n-de-perfil-silueta-gris-sin-foto-de-una-persona-en-el-avatar-la.jpg",
                    category: data.category || "to do",
                    price: data.price,
                    stock: data.stock || 0,
                };
                let readData = await fs.promises.readFile(this.path, "utf-8");
                readData = JSON.parse(readData);
                readData.push(product);
                readData = JSON.stringify(readData, null, 2);
                await fs.promises.writeFile(this.path, readData);
                console.log("¡Successfully created product!");
                return product;
            }
        } catch (error) {
            throw error;
        }
    }

    async read(cat) {
        try {
            let readData = await fs.promises.readFile(this.path, "utf-8");
            readData = JSON.parse(readData);
            if (cat) {
                readData = readData.filter((each) => each.category === cat);
            }
            console.log(readData);
            return readData;
        } catch (error) {
            throw error;
        }
    }

    async readOne(id) {
        try {
            let readData = await fs.promises.readFile(this.path, "utf-8");
            readData = JSON.parse(readData);
            let one = readData.find((each) => each.id === id);
            if (!one) {
                throw new Error("Id not found");
            } else {
                console.log(one);
                console.log("Product exists");
                return one;
            }
        } catch (error) {
            throw error;
        }
    }

    async destroy(id) {
        try {
            let readData = await fs.promises.readFile(this.path, "utf-8");
            readData = JSON.parse(readData);
            let one = readData.find((each) => each.id === id);
            if (!one) {
                throw new Error("Id not found");
            } else {
                let filtered = readData.filter((each) => each.id !== id);
                filtered = JSON.stringify(filtered, null, 2);
                await fs.promises.writeFile(this.path, filtered);
                console.log(one);
                return one;
            }
        } catch (error) {
            throw error;
        }
    }
}

const productManager = new ProductManagerFs();
export default productManager;
