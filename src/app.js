//Importando express con require
const express = require('express')
//Importando el archivo de rutas  con require
const userRouter = require('./users/users.router').router

//Creando una constante que almacena la aplicación
const app = express()

//Habilitando la opción para que la aplicación maneje datos de tipo json
app.use(express.json())



//Aquí se encuentran las rutas de nuestra aplicación
app.use('/api/v1', userRouter)


//Ocupando el puerto 8000 para abrir la aplicación en el servidor
app.listen(8000, () => {
    console.log('Server started at port 8000')
})