/*---ESTE ES EL ARCHIVO DE LAS RUTAS SEGÚN EL MODELO MVC */

//Importando el objeto router de  express
const router = require('express').Router()

//Importando los servicios
const httpUsers = require('./users.http')


//Definiendo las rutas
router.route('/users')
    .get(httpUsers.getAll)
    .post(httpUsers.createUser)

router.route('/users/:id')
    .get(httpUsers.getById)
    .put(httpUsers.updateUser)
    .delete(httpUsers.deleteById)

//Exportando las rutas
module.exports = {
    router
}