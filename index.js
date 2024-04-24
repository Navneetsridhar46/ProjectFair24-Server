// Loads .env file contents into process.env by default

// env file to run first 
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

// Creates an Express application 
const pfServer = express()

// Use cors in express server 
pfServer.use(cors())
// this will only be active when content type is application/json 
pfServer.use(express.json())
// in router.js register 
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT, () => {
    console.log(`Project Fair Server Started at PORT: ${PORT}`);
})

// http://localhost:3000/
pfServer.get("/", (req, res) => {
    res.status(200).send(`<h1 style="color:red">Project Fair server started and waiting for client request!!</h1>`)
})

pfServer.post("/", (req, res) => {
    res.status(200).send(`POST REQUEST`)
})