// Requerir módulos
//ESMODULES
import express from 'express'

//COMMONJS
//const express = require('express')

//INICIALIZACIONES
const app = express()

//VARIABLES
app.set('port', process.env.port || 3000)

//const port = process.env.port || 3000

//MIDDLEWARE
app.use(express.json())

//RUTAS
app.get('/', (req, res)=>{
    res.send("OK")
})

//EXPORTAR LA INSTANCIA DE APP
export default app
