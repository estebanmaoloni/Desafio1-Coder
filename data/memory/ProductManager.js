class ProductManager {
    static #products = [];
    create(data) {
        const product = {
            id:
                ProductManager.#products.length === 0
                    ? 1
                    : ProductManager.#products[
                          ProductManager.#products.length - 1
                      ].id + 1,
            title: data.title,
            photo: data.photo,
            category: data.category,
            price: data.price,
            stock: data.stock,
        };
        if (!data.title || !data.price || !data.category) {
            console.log(
                "¡Error: Title Price or Category fields are incomplete!"
            );
        } else {
            ProductManager.#products.push(product);
            console.log("Product created");
        }
    }
    read() {
        return ProductManager.#products;
    }

    readOne(id) {
        if (!id) {
            console.log("The product you are looking for does not exist");
        } else {
            console.log("¡The product has been found!");
            return ProductManager.#products.find((each) => each.id === id);
        }
    }

    destroy(id) {
        if (!id) {
            console.log("The product you want to delete does not exist");
        } else {
            console.log("¡The product was successfully removed!");
            return ProductManager.#products.filter((each) => each.id !== id);
        }
    }
}

const gestorDeProductos = new ProductManager();

gestorDeProductos.create({
    title: "Remera de Algodón",
    photo: "remera_algodon.jpg",
    category: "ropa",
    price: 25,
    stock: 600,
});

gestorDeProductos.create({
    title: "Pantalones Vaqueros",
    photo: "pantalones_vaqueros.jpg",
    category: "ropa",
    price: 50,
    stock: 400,
});

gestorDeProductos.create({
    title: "Gorra de Béisbol",
    photo: "gorra_beisbol.jpg",
    category: "accesorio",
    price: 20,
    stock: 300,
});

gestorDeProductos.create({
    title: "Collar de Plata",
    photo: "collar_plata.jpg",
    category: "joyería",
    price: 80,
    stock: 200,
});

gestorDeProductos.create({
    title: "Camisa de Vestir",
    photo: "camisa_vestir.jpg",
    category: "ropa",
    price: 45,
    stock: 350,
});

gestorDeProductos.create({
    title: "Shorts Deportivos",
    photo: "shorts_deportivos.jpg",
    category: "ropa",
    price: 30,
    stock: 250,
});

gestorDeProductos.create({
    title: "Sombrero de Paja",
    photo: "sombrero_paja.jpg",
    category: "accesorio",
    price: 15,
    stock: 200,
});

gestorDeProductos.create({
    title: "Collar de Perlas",
    photo: "collar_perlas.jpg",
    category: "joyería",
    price: 120,
    stock: 150,
});

gestorDeProductos.create({
    title: "Blusa Estampada",
    photo: "blusa_estampada.jpg",
    category: "ropa",
    price: 35,
    stock: 300,
});

gestorDeProductos.create({
    title: "Pantalones de Cuero",
    photo: "pantalones_cuero.jpg",
    category: "ropa",
    price: 70,
    stock: 200,
});

gestorDeProductos.create({
    title: "Bufanda de Lana",
    photo: "bufanda_lana.jpg",
    category: "accesorio",
    price: 25,
    stock: 250,
});

gestorDeProductos.create({
    title: "Anillo de Oro",
    photo: "anillo_oro.jpg",
    category: "joyería",
    price: 150,
    stock: 100,
});

gestorDeProductos.create({
    title: "Camiseta Deportiva",
    photo: "camiseta_deportiva.jpg",
    category: "ropa",
    price: 20,
    stock: 400,
});

gestorDeProductos.create({
    title: "Falda Plisada",
    photo: "falda_plisada.jpg",
    category: "ropa",
    price: 40,
    stock: 150,
});

gestorDeProductos.create({
    title: "Pañuelo de Seda",
    photo: "panuelo_seda.jpg",
    category: "accesorio",
    price: 30,
    stock: 200,
});

gestorDeProductos.create({
    title: "Aretes de Diamantes",
    photo: "aretes_diamantes.jpg",
    category: "joyería",
    price: 200,
    stock: 80,
});

gestorDeProductos.create({
    title: "Campera de Cuero",
    photo: "campera_cuero.jpg",
    category: "ropa",
    price: 150,
    stock: 120,
});

gestorDeProductos.create({
    title: "Gorra de Invierno",
    photo: "gorra_invierno.jpg",
    category: "accesorio",
    price: 25,
    stock: 100,
});

gestorDeProductos.create({
    title: "Collar de Cristal",
    photo: "collar_cristal.jpg",
    category: "joyería",
    price: 60,
    stock: 150,
});

gestorDeProductos.create({
    title: "Vestido de Fiesta",
    photo: "vestido_fiesta.jpg",
    category: "ropa",
    price: 100,
    stock: 80,
});

console.log(gestorDeProductos.read());
console.log(gestorDeProductos.readOne());
console.log(gestorDeProductos.destroy());
