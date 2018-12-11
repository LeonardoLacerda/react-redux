const mongoose = require('mongoose') //serve tanto para mapear os objetos js para os documentos que vão pro mongo. Serve também para fazer a conexão com o mongo

mongoose.Promise = global.Promise //Serve para tirar uma Warning de depreciação do mongoose. Informa que vai usar a API de promise do próprio node.

module.exports = mongoose.connect('mongodb://localhost/todo', {
	useMongoClient: true
})