class UserManager {
  static #users = [];
  create(data) {
    const user = {
      id:
        UserManager.#users.length === 0
          ? 1
          : UserManager.#users[UserManager.#users.length - 1].id + 1,
      foto: data.foto,
      email: data.email,
      password: data.password,
      role: data.role
    }
    if (!data.email || !data.password) {
      console.log("¡Error los campos Email o Password estan incompletos!")
    }else{
      UserManager.#users.push(user);
      console.log("Usuario creado con exito");
    }
    
  }

  read(){
    return UserManager.#users
  }
}

//Usuario 1
const gestorDeUsuarios = new UserManager()

gestorDeUsuarios.create({
    foto : "lautaro.jpg" ,
    email : "lautaro@gmail.com" ,
    password : "lau12345",
    role:"Usuario"
}) 

//Usuario 2
gestorDeUsuarios.create({
    foto : "matias.jpg" ,
    email : "matias@gmail.com" ,
    password : "mati12345",
    role:"Administrador"
}) 

//Usuario 3 (Prueba de error)
gestorDeUsuarios.create({
    foto : "jorge.jpg" ,
    email : "jorge@gmail.com" ,
    password : "",
    role:"Administrador"
}) 

//Usuario 4 (Prueba de error)
gestorDeUsuarios.create({
    foto : "agustin.jpg" ,
    email : "" ,
    password : "agustin12345",
    role:"Administrador"
}) 

console.log(gestorDeUsuarios.read())