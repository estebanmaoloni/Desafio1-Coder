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
            role: data.role,
        };
        if (!data.email || !data.password) {
            console.log("¡Error: Email or Password fields are incomplete!");
        } else {
            UserManager.#users.push(user);
            console.log("User created successfully");
        }
    }

    read() {
        return UserManager.#users;
    }

    readOne(id) {
        if (!id) {
            console.log("The user you are looking for does not exist");
        } else {
            console.log("¡The user has been found!");
            return UserManager.#users.find((each) => each.id === id);
        }
    }

    destroy(id) {
        if (!id) {
            console.log("The user you want to delete does not exist");
        } else {
            console.log("¡The user was successfully deleted!");
            return UserManager.#users.filter((each) => each.id !== id);
        }
    }
}

gestorDeUsuarios.create({
    foto: "lautaro.jpg",
    email: "lautaro@gmail.com",
    password: "lau12345",
    role: "Usuario",
});

gestorDeUsuarios.create({
    foto: "maria.jpg",
    email: "maria@hotmail.com",
    password: "maria9876",
    role: "Administrador",
});

gestorDeUsuarios.create({
    foto: "juan.jpg",
    email: "juan@yahoo.com",
    password: "juan54321",
    role: "Usuario",
});

gestorDeUsuarios.create({
    foto: "ana.jpg",
    email: "ana@example.com",
    password: "ana67890",
    role: "Usuario",
});

const gestorDeUsuarios = new UserManager();

console.log(gestorDeUsuarios.read());
console.log(gestorDeUsuarios.readOne());
console.log(gestorDeUsuarios.destroy());
