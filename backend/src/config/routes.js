const express = require('express')


module.exports = function(server) {

	// API Routes
	const router = express.Router()
	//Middleware específico para URL começa com /api. Sempre que digitar /api irá iniciar o routers
	server.use('/api', router) //Toda vez que ver server.use, é um Middleware

	// TODO Routes
	const todoService = require('../api/todo/todoService')
	todoService.register(router, '/todos')
}