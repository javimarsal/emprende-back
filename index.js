const http = require("http")
// import { createServer } from "http";


function requestController () {
    // Lógica de nuestra función
    console.log("Recibimos una nueva request")
    console.log(`Dirname: ${__dirname}`)
    console.log(`Filename: ${__filename}`)
}

const server = http.createServer(requestController)

server.listen(4000)