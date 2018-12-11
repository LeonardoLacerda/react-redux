const port = 3003

const bodyParse = require('body-parser')
const express = require('express') //servidor padrão de mercado que roda node
const server = express() //criando uma instancia do express
const allowCors = require('./cors')
//Sempre que chegar uma requisição, quem irá fazer o parse é o BodyParse. Extended suporta mais tipos de dados que o enconding
//Middleware onde todas as requisições irão passar
server.use(bodyParse.urlencoded({ extended: true }))
//Outro middleware
server.use(bodyParse.json())
server.use(allowCors)

server.listen(port, function() {
	console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server