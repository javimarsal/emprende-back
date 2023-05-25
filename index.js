require('dotenv').config()

const http = require("http")
// import { createServer } from "http";


function requestController () {
    // Lógica de nuestra función
    console.log("Hola mundo!!!!")
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 4000

server.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`)
})