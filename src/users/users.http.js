/*---ESTE ES EL ARCHIVO DE LOS SERVICIOS SEGÚN EL MODELO MVC */

//Importando los controladores
const { createNewUser, getAllUsers, getUserById, editUser, deleteUser } = require('./users.controllers')

//Generando la respuesta para Read (GET)
const getAll = (req, res) => {
  const data = getAllUsers()
  res.status(200).json({
    items: data.length,
    response: data
  })
}

//Generando la respuesta de Read por id (GET)
const getById = (req, res) => {
  const id = Number(req.params.id)
  if (id) {
    const data = getUserById(id)

    if (data) {
      res.status(200).json(data)
    } else {
      res.status(400).json({ message: 'Invalid ID' })
    }

  } else {
    res.status(400).json({ message: 'Id is not a number' })
  }
}


//Generando la respuesta para Create (POST)
const createUser = (req, res) => {
  const data = req.body
  if (data.name && data.age && data.email && data.country && data.phone && data.todo) {
    const response = createNewUser(data)
    res.status(201).json(response)
  } else {
    res.status(400).json({ 'message': 'Invalid arguments' })
  }

}


//Generando la respuesta para Update (PUT)
const updateUser = (req, res) => {
  const id = Number(req.params.id)
  const data = req.body
  if (data.name && data.age && data.email && data.country && data.phone && data.todo) {
    const response = editUser(id,data)
    res.status(201).json(response)
  } else {
    res.status(400).json({ 'message': 'Invalid arguments' })
  }

}

//Generando la respuesta para Delete (DELETE)
const deleteById = (req, res) => {
  const id = Number(req.params.id)
  if (typeof id === 'number') {
    const deleted = deleteUser(id)
    if (deleted) {
      res.status(204).json()
    } else {
      res.status(400).json({ 'message': 'Try with another id' })
    }
  } else {
    res.status(400).json({ 'message': 'Invalid id' })
  }
}


//Exportando los servicios
module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteById
}