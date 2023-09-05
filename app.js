const express = require('express')
const app = express()
let hbs = require('hbs')
const dotenv = require('dotenv').config()
let port=process.env.PORT

//? SERVIR CONTENIDO STATIC & HANDLEBARS
app.set('view engine','hbs')


hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.static('public'))

// app.get('/hola-mundo', (request, response) => {
//     response.send('ruta hola mundo usando express')
// })
app.get('/', (request, response) => {
    response.render('home',{
        nombre:'gino baptista',
        titulo:'Curso Node',
        argment:'Argumento de HBS'
    })
})

app.get('/generic', (request, response) => {
    response.render('generic',{
        nombre:'gino baptista',
        titulo:'Curso Node',
        argment:'Argumento de HBS'
    })
})

app.get('/elements', (request, response) => {
    response.render('elements',{
        nombre:'gino baptista',
        titulo:'Curso Node',
        argment:'Argumento de HBS'
    })
})

//! CUALQUIER RUTA QUE  O SEAN LAS ANTERIORES
app.get('*',(request,response)=>{
    response.sendFile(__dirname+'/public/404.html')
})
console.log(`usando el puerto: ${port}`)
app.listen(port)