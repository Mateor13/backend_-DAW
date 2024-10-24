// Requerir módulos
//ESMODULES
import express from 'express'
import router from './routers/tour_routes.js'
//COMMONJS
//const express = require('express')

//INICIALIZACIONES
const app = express()

//VARIABLES
app.set('port', process.env.port || 3000)

//const port = process.env.port || 3000

//MIDDLEWARE
app.use(express.json())

//RUTAS PRINCIPAL
app.get('/', (req, res)=>{
    res.send("OK")
})
//RUTAS PARA EL TOUR
app.use('/api', router)
//RUTAS PARA EL CLIENTW

//RUTAS PARA EL BOOKING

//EXPORTAR LA INSTANCIA DE APP
export default app
