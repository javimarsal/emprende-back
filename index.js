const http = require("http")
// import { createServer } from "http";


function requestController () {
    // Lógica de nuestra función
    console.log("Hola mundo!!")
}

const server = http.createServer(requestController)

server.listen(4000)