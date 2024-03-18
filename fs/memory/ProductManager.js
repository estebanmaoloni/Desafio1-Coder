class ProductManager {
  static #products = [];
  create(data) {
    const product = {
      id:
        ProductManager.#products.length === 0
          ? 1
          : ProductManager.#products[ProductManager.#products.length - 1].id + 1,
      title: data.title,    
      photo: data.photo,
      category: data.category,
      price: data.price,
      stock: data.stock
    };
    if (!data.title || !data.price || !data.category) {
      console.log("¡Error los campos Title Price o Category estan incompletos!")
    }else{
    ProductManager.#products.push(product);
    console.log("Producto creado");
    }
  }
  read(){
    return ProductManager.#products
  }
}

const gestorDeProductos = new ProductManager()

//Producto 1
gestorDeProductos.create({
    title : "Zapatilla" ,
    photo: "zapatilla.jpg",
      category: "calzado",
      price: 100,
      stock: 500
    
})

//Producto 2
gestorDeProductos.create({
    title : "Botin" ,
    photo: "botines.jpg",
      category: "calzado",
      price: 150,
      stock: 300
    
})

//Producto 3
gestorDeProductos.create({
    title : "Pantalon" ,
    photo: "pantalon.jpg",
      category: "prendas",
      price: 45,
      stock: 200
    
})

//Producto 4
gestorDeProductos.create({
    title : "Remera" ,
    photo: "remera.jpg",
      category: "prendas",
      price: 50,
      stock: 100
    
})

//Producto 5 (Prueba de error)
gestorDeProductos.create({
    title : "" ,
    photo: "gorra.jpg",
      category: "prendas",
      price: 25,
      stock: 40
    
})

console.log(gestorDeProductos.read())