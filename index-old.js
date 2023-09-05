const http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    const persona={
        id:1,
        name:'gino baptista'
    }
    response.write(JSON.stringify(persona))
    response.end()
}).listen(8080)
//? en el listen va especificado en que puerto y hosting se conecta el server
console.log('server creado con exito')
