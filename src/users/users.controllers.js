/*---ESTE ES EL ARCHIVO DE LOS CONTROLADORES SEGÚN EL MODELO MVC */

//creando la Base de Datos local desde una variable
const usersDB = [{
  id: 1,
  name: "Daniel",
  age: 31,
  email: "daniel@academlo.com",
  country: "Peru",
  phone: "99999",
  todo: "Mantenimiento de la base de datos"
}]

//Read. Retorna la base de datos
const getAllUsers = () => usersDB

//Read by id. Retorna el usuario con el id especificado
const getUserById = (id) => {
  const filteredDB = usersDB.filter(user => user.id === id)
  //Cuando no haya coincidencia enviará undefined
  //console.log('esto es filteredDB[0]',filteredDB[0])
  return filteredDB[0]
}

//Create. Creará un nuevo usuario y retornará el mismo
const createNewUser = (userObj) => {
  if (usersDB.length === 0) {
    const newUser = {
      id: 1,
      name: userObj.name,
      age: userObj.age,
      email: userObj.email,
      country: userObj.country,
      phone: userObj.phone,
      todo: userObj.todo
    }
    usersDB.push(newUser)
    return newUser
  }
  const newUser = {
    id: usersDB[usersDB.length - 1].id + 1,
    name: userObj.name,
    age: userObj.age,
    email: userObj.email,
    country: userObj.country,
    phone: userObj.phone,
    todo: userObj.todo
  }
  usersDB.push(newUser)
  return newUser
}


//Update. Actualizará los datos de un usuario, en caso no exista el usuario lo creará en la Base de datos y retornará el mismo
const editUser = (id, data) => {
  const index = usersDB.findIndex(user => user.id === id)

  if (index !== -1) {
    usersDB[index] = {
      id,
      name: data.name,
      age: data.age,
      email: data.email,
      country: data.country,
      phone: data.phone,
      todo: data.todo

    }
    return usersDB[index]
  } else {
    createUser(data)
    return usersDB.at(-1)
  }

}


//Delete. Eliminará un usuario y retornará un valor booleano dependiendo de la condición
const deleteUser = id => {
  const index = usersDB.findIndex(user => user.id === id)
  if (index !== -1) {
    usersDB.splice(index, 1)
    return true
  }
  return false
}



//Exportando los controladores
module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  editUser,
  deleteUser
}

