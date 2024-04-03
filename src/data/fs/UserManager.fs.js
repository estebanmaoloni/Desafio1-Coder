import fs from "fs"
import crypto from "crypto"

class UserManagerFs {

  constructor() {
    this.path = "./src/data/fs/files/users.json"
    this.init()
  }

  init() {
    const exist = fs.existsSync(this.path)
    if (!exist) {
      const userData = JSON.stringify([], null, 2)
      fs.writeFileSync(this.path, userData)
      console.log("¡File was created!")
    } else {
      console.log("The file has already been created and contains data")
    }
  }

  async create(data) {
    try {
      if (!data.email) {
        const error = new Error("The email field is required") 
        throw error 
      } else {
        const user = {
          id: crypto.randomBytes(12).toString("hex"),
          foto: data.foto || "https://us.123rf.com/450wm/belopoppa/belopoppa1809/belopoppa180900002/109693900-imagen-de-marcador-de-posici%C3%B3n-de-perfil-silueta-gris-sin-foto-de-una-persona-en-el-avatar-la.jpg",
          email: data.email,
          password: data.password,
          role: data.role || 0
        };
        let readData = await fs.promises.readFile(this.path, "utf-8")
        readData = JSON.parse(readData)
        readData.push(user)
        readData = JSON.stringify(readData, null, 2)
        await fs.promises.writeFile(this.path, readData)
        console.log("¡User created successfully!")
        return user
      }
    } catch (error) {
      throw error
    }
  }


  async read(rol) {
    try {
      let readData = await fs.promises.readFile(this.path, "utf-8")
      readData = JSON.parse(readData)
      if (rol) {
        readData = readData.filter(each => each.role === rol)
      }
      console.log(readData)
      return readData
    } catch (error) {
      throw (error)
    }
  }

  async readOne(id) {
    try {
      let readData = await fs.promises.readFile(this.path, "utf-8")
      readData = JSON.parse(readData)
      let one = readData.find((each) => each.id === id)
      if (!one) {
        throw new Error("Id not found")
      } else {
        console.log(one)
        console.log("User found")
        return one
      }
    } catch (error) {
      throw (error)
    }
  }

  async update(id, data) {
    try {
      let all = await this.read();
      let one = all.find((each) => each.id === id);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return one;
      } else {
        const error = new Error("Not found!");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      let readData = await fs.promises.readFile(this.path, "utf-8")
      readData = JSON.parse(readData)
      let one = readData.find((each) => each.id === id)
      if (!one) {
        throw new Error("Id not found")
      } else {
        let filtered = readData.filter((each) => each.id !== id)
        filtered = JSON.stringify(filtered, null, 2)
        await fs.promises.writeFile(this.path, filtered)
        console.log(one)
        return one
      }
    } catch (error) {
      throw (error)
    }
  }
}


const userManager = new UserManagerFs()
export default userManager